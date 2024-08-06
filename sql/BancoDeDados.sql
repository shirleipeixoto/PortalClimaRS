--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alertas_deslizamentos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alertas_deslizamentos (
    id integer NOT NULL,
    cidade character varying(255) NOT NULL,
    gravidade character varying(50),
    evento_id integer,
    data_alerta timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT alertas_deslizamentos_gravidade_check CHECK (((gravidade)::text = ANY ((ARRAY['Crítico'::character varying, 'Moderado'::character varying, 'Leve'::character varying])::text[])))
);


--
-- Name: alertas_deslizamentos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.alertas_deslizamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: alertas_deslizamentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.alertas_deslizamentos_id_seq OWNED BY public.alertas_deslizamentos.id;


--
-- Name: alertas_enchentes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alertas_enchentes (
    id integer NOT NULL,
    cidade character varying(255) NOT NULL,
    gravidade character varying(50),
    evento_id integer,
    data_alerta timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT alertas_enchentes_gravidade_check CHECK (((gravidade)::text = ANY ((ARRAY['Crítico'::character varying, 'Moderado'::character varying, 'Leve'::character varying])::text[])))
);


--
-- Name: alertas_enchentes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.alertas_enchentes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: alertas_enchentes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.alertas_enchentes_id_seq OWNED BY public.alertas_enchentes.id;


--
-- Name: contato; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contato (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    sobrenome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    mensagem text NOT NULL,
    data_envio timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: contato_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contato_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contato_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contato_id_seq OWNED BY public.contato.id;


--
-- Name: evento; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.evento (
    id integer NOT NULL,
    tipo character varying(20),
    cidade character varying(50),
    gravidade character varying(20),
    data date
);


--
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.evento.id;


--
-- Name: noticias; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.noticias (
    id integer NOT NULL,
    data date NOT NULL,
    titulo character varying(255) NOT NULL,
    subtitulo character varying(255),
    corpo text NOT NULL,
    autor character varying(255)
);


--
-- Name: noticias_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.noticias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: noticias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.noticias_id_seq OWNED BY public.noticias.id;


--
-- Name: alertas_deslizamentos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_deslizamentos ALTER COLUMN id SET DEFAULT nextval('public.alertas_deslizamentos_id_seq'::regclass);


--
-- Name: alertas_enchentes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_enchentes ALTER COLUMN id SET DEFAULT nextval('public.alertas_enchentes_id_seq'::regclass);


--
-- Name: contato id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contato ALTER COLUMN id SET DEFAULT nextval('public.contato_id_seq'::regclass);


--
-- Name: evento id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.evento ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);


--
-- Name: noticias id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.noticias ALTER COLUMN id SET DEFAULT nextval('public.noticias_id_seq'::regclass);


--
-- Name: alertas_deslizamentos alertas_deslizamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_deslizamentos
    ADD CONSTRAINT alertas_deslizamentos_pkey PRIMARY KEY (id);


--
-- Name: alertas_enchentes alertas_enchentes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_enchentes
    ADD CONSTRAINT alertas_enchentes_pkey PRIMARY KEY (id);


--
-- Name: contato contato_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contato
    ADD CONSTRAINT contato_pkey PRIMARY KEY (id);


--
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- Name: noticias noticias_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.noticias
    ADD CONSTRAINT noticias_pkey PRIMARY KEY (id);


--
-- Name: alertas_deslizamentos alertas_deslizamentos_evento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_deslizamentos
    ADD CONSTRAINT alertas_deslizamentos_evento_id_fkey FOREIGN KEY (evento_id) REFERENCES public.evento(id);


--
-- Name: alertas_enchentes alertas_enchentes_evento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alertas_enchentes
    ADD CONSTRAINT alertas_enchentes_evento_id_fkey FOREIGN KEY (evento_id) REFERENCES public.evento(id);


--
-- PostgreSQL database dump complete
--


--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

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
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    token character varying(36) NOT NULL,
    createdat timestamp without time zone NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortenedUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shortenedUrls (
    id integer NOT NULL,
    url character varying(100) NOT NULL,
    shorturl character varying(8) NOT NULL,
    useremail character varying(100) NOT NULL,
    createdat timestamp without time zone NOT NULL,
    visitCount integer NOT NULL
);


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shortenedUrls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shortenedUrls_id_seq OWNED BY public.shortenedUrls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    createdat timestamp without time zone NOT NULL,
    visitCount integer NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortenedUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortenedUrls ALTER COLUMN id SET DEFAULT nextval('public.shortenedUrls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 'Mari@mail.com', 'd5b4f374-98af-426c-be5b-2588ca70ee17', '2023-05-23 14:46:24.068');


--
-- Data for Name: shortenedUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shortenedUrls VALUES (1, 'https://www.youtube.com', 'fwXUBq-A', 'Mari@mail.com', '2023-05-23 14:47:49.03', 0);
INSERT INTO public.shortenedUrls VALUES (2, 'https://www.youtube.com', 'P7v3TKUT', 'Mari@mail.com', '2023-05-23 15:03:58.981', 0);
INSERT INTO public.shortenedUrls VALUES (3, 'https://www.youtube.com', '-jZCI3yF', 'Mari@mail.com', '2023-05-23 15:03:59.904', 0);
INSERT INTO public.shortenedUrls VALUES (4, 'https://www.youtube.com', 'sg2NURNw', 'Mari@mail.com', '2023-05-23 15:04:00.3', 0);
INSERT INTO public.shortenedUrls VALUES (5, 'https://www.youtube.com', 'N22eM8hg', 'Mari@mail.com', '2023-05-23 15:49:23.048', 0);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Mari@mail.com', '$2b$10$L8JGo8IKP4oVra.jiqPMjOkwhYYEW1JicMg9eHeisbKIwQ10B3/sW', 'Mariano', '2023-05-23 14:46:21.496', 0);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: shortenedUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shortenedUrls_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: shortenedUrls shortenedUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortenedUrls
    ADD CONSTRAINT shortenedUrls_pkey PRIMARY KEY (id);


--
-- Name: users unique_email; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: shortenedUrls unique_shorturl; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortenedUrls
    ADD CONSTRAINT unique_shorturl UNIQUE (shorturl);


--
-- Name: sessions unique_token; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT unique_token UNIQUE (token);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


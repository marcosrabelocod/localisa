-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: localizaufpa
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `andar`
--

DROP TABLE IF EXISTS `andar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `andar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Nome` (`Nome`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `andar`
--

LOCK TABLES `andar` WRITE;
/*!40000 ALTER TABLE `andar` DISABLE KEYS */;
INSERT INTO `andar` VALUES (9,'Nono'),(8,'Oitavo'),(1,'Primeiro'),(4,'Quarto'),(5,'Quinto'),(2,'Segundo'),(7,'Setimo'),(6,'Sexto'),(3,'Terceiro'),(10,'Terreo');
/*!40000 ALTER TABLE `andar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `IdLocal` int NOT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `Site` varchar(80) DEFAULT NULL,
  `Instagran` varchar(30) DEFAULT NULL,
  `Twitter` varchar(30) DEFAULT NULL,
  `Horario` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Contato_fk0` (`IdLocal`),
  CONSTRAINT `Contato_fk0` FOREIGN KEY (`IdLocal`) REFERENCES `localidade` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (1,1,NULL,NULL,NULL,NULL,'06:00 a 22:00',NULL),(2,2,NULL,NULL,NULL,NULL,'06:00 a 22:00',NULL),(3,3,NULL,NULL,NULL,NULL,'06:00 a 22:00',NULL),(4,4,NULL,NULL,NULL,NULL,'06:00 a 22:00',NULL),(5,5,NULL,NULL,NULL,NULL,'06:00 a 22:00',NULL),(6,6,'(91) 3201-7182','www.mirante.proeg.ufpa.br',NULL,NULL,'07:30 a 21:50','mirantedorio@ufpa.br'),(7,7,'(91) 3201-7110','bc.ufpa.br','bcufpa','BibliotecaUfpa','08:00 a 22:00','bc@ufpa.br'),(8,8,NULL,'ciac.ufpa.br',NULL,NULL,'08:00 a 17:00','ciac@ufpa.br'),(9,9,'(91) 3201-8794',NULL,'ciufpa',NULL,'08:00 a 17:00','c.internacional@ufpa.br'),(10,10,'(91) 3201-7390',NULL,NULL,NULL,'07:00 a 22:00','reitoria@ufpa.br'),(11,11,'(91)3201-7309','ru.ufpa.br','ru_ufpa',NULL,'11:30 a 14:00','ru@ufpa.br'),(12,12,'(91)3201-7103','icen.ufpa.br',NULL,NULL,'7:00 a 20:00','icen@ufpa.br'),(13,13,NULL,NULL,NULL,NULL,'8:00 a 20:00',NULL),(14,11,NULL,NULL,NULL,NULL,'17:45 a 19:00',NULL),(15,15,'(91)3321-8900','www.pctguama.org.br','pctguama','pctguama','07:00 a 19:00',NULL),(16,16,'(91)9892-82360','www.eetepadrcelsomalcher.com.br','eetepacelsomalcher',NULL,'07:00 a 18:00',NULL),(17,17,'(91)3201-7066','www.faculdademedicina.ufpa.br','famed_ufpa',NULL,'08:00 a 18:00','coord-medicina@ufpa.br'),(18,18,'(91)3201-7455','www.fenav.ufpa.br',NULL,NULL,'08:00 a 18:00',NULL),(19,19,'(91)3201-7494','www.odontologia.ufpa.br','fo_ufpa.oficial',NULL,'08:00 a 20:00','secretaria.fo@ufpa.br'),(20,20,'(91)3201-8892','www.ffto.ufpa.br','ffto_ufpa',NULL,'08:00 a 18:00','ffto@ufpa.br'),(21,5,'(91)955554444','','','','23:50 a 01:09',''),(22,46,'(91)3201-7740','www.lea.ufpa.br','','','07:00 a 20:00',''),(23,21,'(91)3201-7309','www.ru.ufpa.br','ru_ufpa','filadoruufpa','11:00 a 14:00',''),(24,21,'','','','','17:45 a 19:15',''),(25,24,'','','','','11:30 a 19:30',''),(26,25,'(91)98838-1374','','','',' a ',''),(27,26,'(91)3201-7818','www.bettina.ufpa.br','','','07:00 a 17:00',''),(28,27,'','','','','08:00 a 18:00',''),(29,23,'(91)3231-8372','www.ceamazon.com.br','','','08:00 a 17:00',''),(30,47,'','','','','08:00 a 18:00',''),(31,48,'(91)3201-7049','','','','08:00 a 18:00',''),(32,49,'(91)3342-4000','microdatasistemas.net','','','08:00 a 18:00',''),(33,50,'(91)98145-4718','www.ecosetengenharia.com','','','08:00 a 18:00',''),(34,51,'(91)3116-8900','																','','','08:00 a 18:00',''),(35,52,'(91)3208-7095','www.inpe.br/cra','','','08:00 a 17:30',''),(36,29,'(91)3201-8755','www.ppgenf.propesp.ufpa.br','','','09:00 a 17:00',''),(37,31,'913201-7202','ascom.ufpa.br/index.php/cursos-da-ufpa/518-farmacia','','',' a ',''),(38,34,'(91)3201-8917','neb.ufpa.br','','','08:00 a 14:00',''),(39,35,'(91)3249-0176','adufpa.org.br','','',' a ',''),(40,35,'988830818','','','',' a ',''),(41,53,'(91)981125033','www.amazonartesanal.com.br/','','','08:00 a 18:00',''),(42,36,'(91)32298978','www.calmanbrasil.com.br/','','','08:00 a 18:00',''),(43,37,'(91)32298978','www.calmanbrasil.com.br/','','','08:00 a 18:00',''),(44,38,'(91)985153993','www.geoinconsultoria.com/','','','08:00 a 18:00',''),(45,39,'(91)32318372','www.ceamazon.com.br/','','','08:00 a 17:00',''),(46,40,'(91)32017700','www.numa.ufpa.br/','','','08:00 a 17:00',''),(47,54,'(91)32017563','www.ppgo.propesp.ufpa.br/','','','08:30 a 17:00',''),(48,55,'559132017252','','','','08:00 a 17:00',''),(49,57,'(98)2136-0377','','','','08:00 a 13:00',''),(50,58,'(91)32018401','www.icj.ufpa.br/','','',' a ',''),(51,60,'(91)32017109','www.itec.ufpa.br/','','','07:30 a 21:30',''),(52,61,'(91)32017254','','','','08:00 a 17:00',''),(53,62,'(91)32017101','www.icsa.ufpa.br/','','','08:00 a 18:00',''),(54,33,'(91)32017700','tropicomovimento.com.br/','','',' a ','');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidade`
--

DROP TABLE IF EXISTS `localidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localidade` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(60) DEFAULT NULL,
  `latitude` varchar(15) DEFAULT NULL,
  `longitude` varchar(15) DEFAULT NULL,
  `Andar` int NOT NULL,
  `Origem` int DEFAULT NULL,
  `Tipo` int NOT NULL,
  `Setor` int NOT NULL,
  `Portao` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Localidade_fk4` (`Portao`),
  KEY `Localidade_fk3` (`Setor`),
  KEY `Localidade_fk2` (`Tipo`),
  KEY `Localidade_fk1` (`Origem`),
  KEY `Localidade_fk0` (`Andar`),
  CONSTRAINT `Localidade_fk0` FOREIGN KEY (`Andar`) REFERENCES `andar` (`id`),
  CONSTRAINT `Localidade_fk2` FOREIGN KEY (`Tipo`) REFERENCES `tipo` (`id`),
  CONSTRAINT `Localidade_fk3` FOREIGN KEY (`Setor`) REFERENCES `setor` (`Id`),
  CONSTRAINT `Localidade_fk4` FOREIGN KEY (`Portao`) REFERENCES `portao` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidade`
--

LOCK TABLES `localidade` WRITE;
/*!40000 ALTER TABLE `localidade` DISABLE KEYS */;
INSERT INTO `localidade` VALUES (1,'Portão 1','-48.459511','-1.475972',10,0,4,1,7),(2,'Portão 2','-48.455924','-1.472347',10,0,4,1,8),(3,'Portão 3','-48.451622','-1.472784',10,0,4,2,9),(4,'Portão 4','-48.448121','-1.466799',10,0,4,3,10),(5,'Portão 5','-48.445642','-1.463082',10,0,4,4,11),(6,'Mirante do Rio','-48.45654','-1.47721',10,0,3,1,7),(7,'Biblioteca Central','-48.45628','-1.47637',10,0,6,1,8),(8,'CIAC','-48.45612','-1.47551',10,0,1,1,8),(9,'Centro de Internacionalização','-48.45772','-1.47664',10,0,1,1,7),(10,'Reitoria','-48.45516','-1.47595',10,0,1,1,8),(11,'Restaurante Universitário Básico','-48.45806','-1.47779',10,0,5,1,7),(12,'ICEN - Instituto de Ciências Exatas e Naturais','-48.45605','-1.47446',10,0,7,1,8),(13,'Ver-o-pesinho Básico','-48.45657','-1.47570',10,0,5,1,7),(14,'Laboratório de Engenharia Elétrica e Computação','-48.45185','-1.47378',10,0,8,2,9),(15,'PCT - Parque de Ciência e Tecnologia do Guamá','-48.44456','-1.46347',10,0,9,4,11),(16,'EETEPA Dr. Celso Malcher','-48.44161','-1.46189',10,0,9,4,11),(17,'Faculdade de Medicina(FAMED)','-48.44795','-1.46887',10,0,10,3,10),(18,'FENAV - Faculdade de Engenharia Naval','-48.445100072','-1.4705543919',10,0,10,3,10),(19,'Faculdade de Odontologia','-48.44732','-1.47105',10,0,10,3,10),(20,'FFTO - Faculdade de Fisioterapia e Terapia Ocupacional','-48.44617','-1.47108',10,0,10,3,10),(21,'Restaurante Universitário Profissional(RU)','-48.450710','-1.473480',10,0,5,2,9),(23,'Ceamazon','-48.4445067','-1.4682558',10,0,9,3,10),(24,'Restaurante do NAEA','-48.44953','-1.47193',10,0,5,2,9),(25,'POEMA','-48.4493141','-1.4714443',10,0,5,2,9),(26,'Hospital Universitário Bettina Ferro de Souza','-48.4470607','-1.469484',10,0,2,3,10),(27,'Centro de Atenção à Saúde da Mulher e da Criança (CASMUC)','-48.4474612','-1.4700024',10,0,2,3,10),(28,'Estacionamento','-48.4474124','-1.4701186',10,0,9,3,10),(29,'Programa de Pós-graduação em Enfermagem (PPGENF)','-48.4465938','-1.4708392',10,0,10,3,10),(30,'Farma Orto','-48.44663','-1.47178',10,0,9,3,10),(31,'Faculdade de Farmácia','-48.447388','-1.472011',10,0,10,3,9),(33,'Programa Interdisciplinar Trópico em Movimento','-48.4481978','-1.4732126',10,0,9,3,9),(34,'Núcleo de Educação Básica (NEB)','-48.4496766','-1.4721404',10,0,9,2,9),(35,'Associação dos Docentes da UFPA (Adufpa)','-48.4527693','-1.4743872',10,0,1,2,9),(36,'Calman Brasil LTDA ME',' -48.4454217','-1.4641442',10,0,9,3,11),(37,'Execute Soluções em TI','-48.44527','-1.46406',10,0,9,3,11),(38,'Soluções em Geológia e Ambiente (GEOIN)',' -48.4453406','-1.4642395',10,0,9,3,11),(39,'Eletroposto Ceamazon',' -48.4464747','-1.46701823',10,0,9,3,10),(40,'Laboratorio de Biotecnologia',' -48.44794046','-1.46928463',10,0,8,3,10),(41,'Estacionamento ','-48.44671945','-1.47028138',10,0,9,3,10),(42,'Faculdade de Computação','-48.45605','-1.47446',1,12,10,1,8),(45,'Laboratório de Engenharia Elétrica e Computação (LEEC)','-48.4521565','-1.4740089',10,0,8,2,9),(46,'Laboratório de Eletromagnetismo Aplicado (LEA)','-48.4521565','-1.4740089',1,45,8,2,9),(47,'Centro de Estudos Avançados da Biodiversidade (CEABIO)','-48.4453096','-1.4652435',10,15,9,4,11),(48,'Laboratório de Qualidade do Leite','-48.4453096','-1.4652435',10,15,9,4,10),(49,'Microdata Soluções Corporativas','-48.4453096','-1.4652435',10,15,9,4,11),(50,'ECOSET Engenharia   ','-48.4453096','-1.4652435',10,15,9,4,11),(51,'Controle De Pragas Universitário','-48.4446059','-1.4641432',10,15,9,4,11),(52,'Instituto Nacional de Pesquisas Espaciais (INPE)','-48.4423911','-1.4611906',10,0,7,3,11),(53,'Farofofa Premium','-48.4443707','-1.4637774',10,0,9,4,11),(54,'Programa de Pós-graduação em Odontologia (PPGO)','-48.4475168','-1.47102300',10,0,9,3,10),(55,'Laboratório de Engenharia Naval',' -48.445100072','-1.4705543919',10,18,8,3,10),(56,'Laboratório de Biologia / Estufa','-48.4467985','-1.4724561',10,0,8,3,10),(57,'Juizado Especial do Idoso Belém PA','-48.4487129','-1.4710866',10,0,9,2,9),(58,'Instituto de Ciências Jurídicas da UFPa','-48.4497455','-1.4713776',10,0,7,2,9),(59,'Auditório José Vicente Miranda Filho','-48.4497455','-1.4713776',10,58,1,2,9),(60,'Instituto de Tecnologia (ITEC)','-48.4507161','-1.4727761',10,0,7,2,9),(61,'Faculdade de Engenharia Civil','-48.4507161','-1.4727761',10,60,10,2,9),(62,'Instituto de Ciências Sociais Aplicadas (ICSA)','-48.449195','-1.472843',10,0,7,2,9),(63,'Laboratorio de Economia e Complexidade (EcoS)','-48.4494456','-1.4726871',10,62,8,2,9);
/*!40000 ALTER TABLE `localidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portao`
--

DROP TABLE IF EXISTS `portao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portao` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Nome` (`Nome`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portao`
--

LOCK TABLES `portao` WRITE;
/*!40000 ALTER TABLE `portao` DISABLE KEYS */;
INSERT INTO `portao` VALUES (7,'1'),(8,'2'),(9,'3'),(10,'4'),(11,'5');
/*!40000 ALTER TABLE `portao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setor`
--

DROP TABLE IF EXISTS `setor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `setor` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  `Poligono` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setor`
--

LOCK TABLES `setor` WRITE;
/*!40000 ALTER TABLE `setor` DISABLE KEYS */;
INSERT INTO `setor` VALUES (1,'basico','*'),(2,'Profissional','*'),(3,'Saúde','*'),(4,'Parque de Ciência e Tecnologia','*');
/*!40000 ALTER TABLE `setor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Administrativo'),(2,'Saude'),(3,'Aulas'),(4,'Portao'),(5,'Alimentação'),(6,'Biblioteca'),(7,'Instituto'),(8,'Laboratório'),(9,'Outro'),(10,'Faculdade');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-27  0:56:47

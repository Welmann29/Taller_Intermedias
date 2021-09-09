CREATE TABLE tipo_animal(
    id_tipo SMALLINT PRIMARY KEY IDENTITY,
    nombre VARCHAR(15) NOT NULL
);

CREATE TABLE raza(
    id_raza INT PRIMARY KEY IDENTITY,
    nombre VARCHAR(20) NOT NULL,
    id_tipo SMALLINT NOT NULL,
    CONSTRAINT fk_raza_tipo FOREIGN KEY (id_tipo) REFERENCES tipo_animal(id_tipo)
);

CREATE TABLE especialidad(
    id_especialidad SMALLINT PRIMARY KEY IDENTITY,
    nombre VARCHAR(15)
);

CREATE TABLE veterinario(
    id_veterinario INT PRIMARY KEY IDENTITY,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    numero_colegiado VARCHAR(10) NOT NULL,
    dpi VARCHAR(14) NOT NULL,
    inicio_labores DATE NOT NULL,
    activo BIT,
    fin_labores DATE NULL,
    id_especialidad SMALLINT NULL,
    id_encargado INT NULL,
    CONSTRAINT fk_especialidad_veterinario FOREIGN KEY (id_especialidad) REFERENCES especialidad(id_especialidad)
);

CREATE TABLE inventario(
    id_inventario INT PRIMARY KEY IDENTITY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(100) NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(6, 2) NOT NULL
);

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY IDENTITY,
    dpi VARCHAR(14) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    sexo BIT,
    fecha_nacimiento DATE NULL,
    mascota_favorita INT NULL
);

CREATE TABLE mascota(
    id_mascota INT PRIMARY KEY IDENTITY,
    nombre VARCHAR(25) NOT NULL,
    peso DECIMAL(4, 1) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_raza INT NOT NULL,
    id_cliente INT NOT NULL,
    CONSTRAINT fk_mascota_raza FOREIGN KEY (id_raza) REFERENCES raza(id_raza),
    CONSTRAINT fk_mascota_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE consulta(
    id_consulta INT PRIMARY KEY IDENTITY,
    fecha_programada DATETIME NOT NULL,
    descripcion VARCHAR(300),
    id_mascota INT NOT NULL,
    id_veterinario INT NOT NULL,
    CONSTRAINT fk_consulta_mascota FOREIGN KEY (id_mascota) REFERENCES mascota(id_mascota),
    CONSTRAINT fk_consulta_veterinario FOREIGN KEY (id_veterinario) REFERENCES veterinario(id_veterinario)
);

CREATE TABLE factura(
    clave_factura VARCHAR(8) PRIMARY KEY,
    serie VARCHAR(4) NOT NULL,
    correlativo INT NOT NULL,
    total DECIMAL(7, 2) NULL,
    nit VARCHAR(10) NOT NULL,
    id_cliente INT NULL,
    CONSTRAINT fk_factura_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE detalle_factura(
    clave_factura VARCHAR(8),
    id_inventario INT,
    cantidad INT NOT NULL,
    subtotal DECIMAL(6,2) NOT NULL,
    PRIMARY KEY(clave_factura, id_inventario),
    CONSTRAINT fk_detalle_factura_factura FOREIGN KEY (clave_factura) REFERENCES factura(clave_factura),
    CONSTRAINT fk_detalle_factura_inventario FOREIGN KEY (id_inventario) REFERENCES inventario(id_inventario)
);


ALTER TABLE cliente ADD CONSTRAINT fk_mascota_favorita FOREIGN KEY (mascota_favorita) REFERENCES mascota(id_mascota);

ALTER TABLE veterinario ADD CONSTRAINT fk_encargado FOREIGN KEY (id_encargado) REFERENCES veterinario(id_veterinario);
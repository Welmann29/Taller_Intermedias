--- Mostrar el nombre de las mascotas con su raza, tipo y dueño

SELECT 
    c.nombres as Dueño, m.nombre as Mascota, ta.nombre as Tipo,  r.nombre as Raza
FROM 
    cliente as c INNER JOIN mascota as m
ON 
    m.id_cliente = c.id_cliente
INNER JOIN raza as r ON 
    m.id_raza = r.id_raza
INNER JOIN tipo_animal as ta ON
    r.id_tipo = ta.id_tipo;


--- Mostrar el nombre de las mascotas con su raza, tipo y dueño, agregandole filtro

SELECT 
    c.nombres as Dueño, m.nombre as Mascota, ta.nombre as Tipo,  r.nombre as Raza
FROM 
    cliente as c INNER JOIN mascota as m
ON 
    m.id_cliente = c.id_cliente
INNER JOIN raza as r ON 
    m.id_raza = r.id_raza
INNER JOIN tipo_animal as ta ON
    r.id_tipo = ta.id_tipo
WHERE 
    c.nombre = 'Welmann';

--- Promedio del peso de todos los gatos 
SELECT 
    avg(m.peso) as Promedio_Peso
FROM 
    cliente as c INNER JOIN mascota as m
ON 
    m.id_cliente = c.id_cliente
INNER JOIN raza as r ON 
    m.id_raza = r.id_raza
INNER JOIN tipo_animal as ta ON
    r.id_tipo = ta.id_tipo
WHERE 
	ta.nombre = 'gato'
GROUP BY 
	ta.nombre

--- Cuantos perros hay registrados en el sistema
SELECT 
    count(ta.nombre) as Cantidad
FROM 
    cliente as c INNER JOIN mascota as m
ON 
    m.id_cliente = c.id_cliente
INNER JOIN raza as r ON 
    m.id_raza = r.id_raza
INNER JOIN tipo_animal as ta ON
    r.id_tipo = ta.id_tipo
WHERE 
	ta.nombre = 'perro'


--- Mostrar cuantas mascotas tiene el cleinte con mayor numero de mascotas registradas
SELECT TOP(1)
    c.nombres, count(c.nombres) as Mascotas_registradas
FROM 
    cliente as c INNER JOIN mascota as m
ON 
    m.id_cliente = c.id_cliente
GROUP BY 
	c.nombres
ORDER BY 
	Mascotas_registradas DESC;

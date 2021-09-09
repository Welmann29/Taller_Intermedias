import pyodbc
import csv
direccion_servidor = 'localhost'
nombre_bd = 'Intermedias'
nombre_usuario = 'prueba'
password = '12345'

def InsertarTabla(cursor, consulta, archivo):
    with open(archivo, newline='', encoding='utf-8') as File:
        reader = csv.reader(File)
        for row in reader:
                cursor.execute(consulta, (row))

try:
    conexion = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                              direccion_servidor+';DATABASE='+nombre_bd+';UID='+nombre_usuario+';PWD=' + password)
    # OK! conexión exitosa
    with conexion.cursor() as cursor:
        InsertarTabla(cursor, "INSERT INTO tipo_animal VALUES (?)", "tipo_animal.csv")
        InsertarTabla(cursor, "Insert into raza VALUES (?, ?)", "razas.csv")
        InsertarTabla(cursor, "INSERT INTO cliente(dpi, nombres, apellidos, sexo) VALUES(?,?,?,?)", "clientes.csv")
        InsertarTabla(cursor, "Insert into mascota VALUES (?, ?, ?, ?, ?)", "mascotas.csv")
        
except Exception as e:
    # Atrapar error
    print("Ocurrió un error al conectar a SQL Server: ", e)


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialState = {
  matricula: "",
  aPaterno: "",
  aMaterno: "",
  nombre: "",
  sexo: "",
  fecha: "",
  hora: "",
  motivo: "",
  aTelefono: "",
  aCorreo: "",
  aCarrera: "",
};

function AlumnoEliminarp() {
  const [alumno, setAlumno] = useState(initialState);
  const {
    matricula,
    aPaterno,
    aMaterno,
    nombre,
    sexo,
    fecha,
    hora,
    motivo,
    aTelefono,
    aCorreo,
    aCarrera,
  } = alumno;

  const { m } = useParams();

  useEffect(() => {
    if (m) {
      getAlumnop(m);
    }
  }, []);

  const getAlumnop = async (m) => {
    const response = await axios.get(`http://127.0.0.1:5000/pedagogia/${m}`);

    if (response.status === 200) {
      setAlumno(response.data.result[0]);
    }
  };

  const handleSubmitp = (event) => {
    event.preventDefault();
    deleteAlumnop(alumno);
  };

  const deleteAlumnop = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/pedagogia/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Alumno Eliminar</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmitp}>
          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  defaultValue={matricula}
                  required
                  disabled
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Nombre">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Ingresa nombre"
                  defaultValue={nombre}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Apellido Paterno">
                <Form.Control
                  name="aPaterno"
                  type="text"
                  placeholder="Ingresa Apellido paterno"
                  defaultValue={aPaterno}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Apellido Materno">
                <Form.Control
                  name="aMaterno"
                  type="text"
                  placeholder="Ingresa Apellido materno"
                  defaultValue={aMaterno}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                defaultValue={sexo}
                required
              >
                <option>Selecciona tu sexo</option>

                <option value="1">Femenino</option>

                <option value="2">Masculino</option>
              </Form.Select>
            </Col>

            <Col>
              <FloatingLabel label="Teléfono">
                {" "}
                <Form.Control
                  name="aTelefono"
                  type="text"
                  placeholder="Ingresa Telefono (618)1232323"
                  defaultValue={aTelefono}
                  pattern="[(][0-9]{3}[)][0-9]{7}"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Correo Electrónico">
                <Form.Control
                  name="aCorreo"
                  type="email"
                  placeholder="Ingresa Correo electronico"
                  defaultValue={aCorreo}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Facebook">
                <Form.Control
                  name="aCarrera"
                  type="text"
                  placeholder="Ingresa tu Carrera"
                  defaultValue={aCarrera}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Cita</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha">
                <Form.Control
                  name="fecha"
                  type="date"
                  placeholder="Ingresa la Fecha"
                  value={fecha}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Hora">
                <Form.Control
                  name="hora"
                  type="time"
                  placeholder="Ingresa la Hora de la Cita"
                  value={hora}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Motivo">
                <Form.Control
                  name="motivo"
                  type="text"
                  placeholder="Ingresa el Motivo"
                  value={motivo}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-danger">
                Eliminar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-info">Cancelar</Button>
            </Col>
          </Row>

          {/* <Row className='mt-3 mb-3'>

                                               <Col></Col>

                                               <Col></Col>

                               </Row> */}
        </Form>
      </Container>
    </>
  );
}

export default AlumnoEliminarp;

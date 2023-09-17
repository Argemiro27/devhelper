import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';


function EditorCodigo() {

  return (
    <Container className="align-content">
      <Row>
        <Col className="content-snippets m-5">
          <Row>
            <Col>
              <AceEditor
                mode="javascript"
                theme="dracula"
                fontSize={14}
                width="100%"
                height="300px"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EditorCodigo;

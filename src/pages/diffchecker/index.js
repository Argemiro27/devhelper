import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import { Card } from 'react-bootstrap';
import { diffChars } from 'diff';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function DiffChecker() {
  const [codeSnippet1, setCodeSnippet1] = useState('');
  const [codeSnippet2, setCodeSnippet2] = useState('');
  const [comparisonResult, setComparisonResult] = useState([]);

  const compareCode = () => {
    const differences = diffChars(codeSnippet1, codeSnippet2);
    setComparisonResult(differences);
  };

  return (
    <Container className="align-content">
      <Row>
        <Col className="content-snippets m-5">
          <Row>
            <Col>
              <AceEditor
                mode="javascript"
                theme="dracula"
                name="codeSnippet1"
                value={codeSnippet1}
                onChange={(newValue) => setCodeSnippet1(newValue)}
                fontSize={14}
                width="100%"
                height="300px"
              />
            </Col>
            <Col>
              <AceEditor
                mode="javascript"
                theme="dracula"
                name="codeSnippet2"
                value={codeSnippet2}
                onChange={(newValue) => setCodeSnippet2(newValue)}
                fontSize={14}
                width="100%"
                height="300px"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={compareCode} className="btn-success mt-3"><FontAwesomeIcon  icon={faCode}/>Comparar Código</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '100%', backgroundColor: 'inherit', border: 'none' }}>
                <Card.Body>
                  <Card.Text style={{ overflow: 'auto', maxHeight: '300px' }}>
                    <div>
                      {comparisonResult.map((part, index) => (
                        <SyntaxHighlighter
                          key={index}
                          language="javascript"
                          style={dracula}
                        >
                          {part.value}
                        </SyntaxHighlighter>
                      ))}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DiffChecker;

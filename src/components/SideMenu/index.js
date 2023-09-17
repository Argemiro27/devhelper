import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCode, faFileAlt, faCog, faBell, faBug, faPlayCircle, faList, faGlobe, faCogs, faChartBar, faTasks } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function SideMenu() {
  return (
    <aside className="sidemenu">
      <h1>Menu</h1>
      <ul>
        <li><FontAwesomeIcon icon={faComment} /> <a href='/chatbot'>Chat Bot</a></li>
        <li><FontAwesomeIcon icon={faFileAlt} /> <a href='/diffchecker'>Diff Checker</a></li>
        <li><FontAwesomeIcon icon={faCode} /> <a href='/editorcodigo'>Editor de Código Online</a></li>
        <li><FontAwesomeIcon icon={faGlobe} /> <a href='/comparador'>Comparador de Linguagens</a></li>
        <li><FontAwesomeIcon icon={faCog} /> <a href='/documentacao'>Gerador de Documentação</a></li>
        <li><FontAwesomeIcon icon={faPlayCircle} /> <a href='/console'>Console Interativo</a></li>
        <li><FontAwesomeIcon icon={faList} /> <a href='/projetos'>Acompanhamento de Projetos</a></li>
        <li><FontAwesomeIcon icon={faBell} /> <a href='/notificacoes'>Notificações e Lembretes</a></li>
        <li><FontAwesomeIcon icon={faCogs} /> <a href='/controleversao'>Integração com Controle de Versão</a></li>
        <li><FontAwesomeIcon icon={faChartBar} /> <a href='/analisedesempenho'>Ferramenta de Análise de Desempenho</a></li>
        <li><FontAwesomeIcon icon={faTasks} /> <a href='/testeautomatizado'>Ferramentas de Teste Automatizado</a></li>
        <li><FontAwesomeIcon icon={faBug} /> <a href='/rastreamentodebugs'>Rastreamento de Bugs e Problemas</a></li>
      </ul>
    </aside>
  );
}

export default SideMenu;

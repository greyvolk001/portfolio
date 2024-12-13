import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  return (
    <Main title="About" description="Learn about Vadym Tarasenko">
      <article className="post markdown" id="about">
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;

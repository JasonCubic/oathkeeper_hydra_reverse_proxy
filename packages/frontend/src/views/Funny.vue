<template>
  <div class="funny">
    <h1>message from api:</h1>
    <pre v-highlightjs="prettyPrintJson(responseData)"><code class="json"></code></pre>
    <p>Response time: {{responseTime}}</p>
    <button type="button" @click="getFunnyMessage">Update message</button>
  </div>
</template>

<script>
import axios from 'axios';

function handleMounted() {
  this.getFunnyMessage();
}

function getFunnyMessage() {
  const startTime = new Date().getTime();
  axios({
    method: 'GET',
    url: '/api/funny',
  })
    .then((response) => {
      const AmountOfTimeTheQueryTook = new Date().getTime() - startTime;
      console.info(`AJAX TIME (${AmountOfTimeTheQueryTook / 1000.0}s), response: `, response);
      this.responseTime = `${AmountOfTimeTheQueryTook / 1000.0} seconds`;
      this.responseData = response;
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}

function prettyPrintJson(json) {
  return JSON.stringify(json, null, 2);
}

export default {
  name: 'funny',
  mounted: handleMounted,
  data() {
    return {
      responseData: '',
      responseTime: '',
    };
  },
  methods: {
    getFunnyMessage,
    prettyPrintJson,
  },
};
</script>

<style>
pre {
  text-align: left;
  margin-left: 15%;
  margin-right: 15%;
}

/* CSS Source: https://github.com/highlightjs/highlight.js/blob/master/src/styles/agate.css */

/*!
 * Agate by Taufik Nurrohman <https://github.com/taufik-nurrohman>
 * ---------------------------------------------------------------
 *
 * #ade5fc
 * #a2fca2
 * #c6b4f0
 * #d36363
 * #fcc28c
 * #fc9b9b
 * #ffa
 * #fff
 * #333
 * #62c8f3
 * #888
 *
 */

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #333;
  color: white;
}

.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-code,
.hljs-emphasis {
  font-style: italic;
}

.hljs-tag {
  color: #62c8f3;
}

.hljs-variable,
.hljs-template-variable,
.hljs-selector-id,
.hljs-selector-class {
  color: #ade5fc;
}

.hljs-string,
.hljs-bullet {
  color: #a2fca2;
}

.hljs-type,
.hljs-title,
.hljs-section,
.hljs-attribute,
.hljs-quote,
.hljs-built_in,
.hljs-builtin-name {
  color: #ffa;
}

.hljs-number,
.hljs-symbol,
.hljs-bullet {
  color: #d36363;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal {
  color: #fcc28c;
}

.hljs-comment,
.hljs-deletion,
.hljs-code {
  color: #888;
}

.hljs-regexp,
.hljs-link {
  color: #c6b4f0;
}

.hljs-meta {
  color: #fc9b9b;
}

.hljs-deletion {
  background-color: #fc9b9b;
  color: #333;
}

.hljs-addition {
  background-color: #a2fca2;
  color: #333;
}

.hljs a {
  color: inherit;
}

.hljs a:focus,
.hljs a:hover {
  color: inherit;
  text-decoration: underline;
}
</style>

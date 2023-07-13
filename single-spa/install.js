/* eslint-disable prettier/prettier */
const concurrently = require("concurrently");
const path = require('path');
concurrently([
  
  {  command: 'npm install', cwd: path.join(__dirname, '..', 'footer') },
  {  command: 'npm install', cwd: path.join(__dirname, '..', 'main-page') },
  {  command: 'npm install', cwd: path.join(__dirname, '..', 'single-spa') },
  {  command: 'npm install', cwd: path.join(__dirname, '..', 'new-header') }
  // Adicione mais comandos para outras pastas, se necessário
]).catch((err) => {
  console.error(err);
});
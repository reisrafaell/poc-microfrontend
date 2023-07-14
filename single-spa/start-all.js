/* eslint-disable prettier/prettier */
const concurrently = require("concurrently");
const path = require('path');
concurrently([
  
  {  command: 'npm start', cwd: path.join(__dirname, '..', 'footer') },
  {  command: 'npm start', cwd: path.join(__dirname, '..', 'main-page') },
  {  command: 'npm start', cwd: path.join(__dirname, '..', 'single-spa') },
  {  command: 'npm start', cwd: path.join(__dirname, '..', 'new-header') }
  {  command: 'npm start', cwd: path.join(__dirname, '..', 'util-ui') }
  // Adicione mais comandos para outras pastas, se necessário
]).catch((err) => {
  console.error(err);
});
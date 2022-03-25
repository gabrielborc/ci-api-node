import express from 'express';
import routes from './src/api/v1/routes';
import Server from './src/server';

const server = new Server(express, routes);

server.start();
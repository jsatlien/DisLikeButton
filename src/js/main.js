import angular from 'angular';

import { MainController } from "./controllers/main.js";

angular
  .module('app', [])
  .controller('MainController', MainController);

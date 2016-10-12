'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('sampleApp.signup', [])
  .controller('SignupController', SignupController)
  .name;

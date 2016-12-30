import template from './commontabs.html';
import controller from './commontabs.controller';
import './commontabs.less';

export default {
  restrict: 'E',
  bindings: {
	  'tabsArr': '=',
	  'activeKey': '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

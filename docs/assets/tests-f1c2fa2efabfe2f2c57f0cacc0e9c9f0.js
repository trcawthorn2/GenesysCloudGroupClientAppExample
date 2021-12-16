'use strict';

define('groupExample/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });

  QUnit.test('components/groups-overview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/groups-overview/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/link-to-cell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/link-to-cell/component.js should pass ESLint\n\n13:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('services/auth-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth-service.js should pass ESLint\n\n22:13 - Unexpected console statement. (no-console)\n26:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/browser-storage-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/browser-storage-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/genesys-sdk-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/genesys-sdk-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/group-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/group-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/region-locator-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/region-locator-service.js should pass ESLint\n\n');
  });

  QUnit.test('services/rest-client-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/rest-client-service.js should pass ESLint\n\n6:16 - \'$\' is not defined. (no-undef)\n12:16 - \'$\' is not defined. (no-undef)\n18:16 - \'$\' is not defined. (no-undef)\n23:16 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('services/url-state-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/url-state-service.js should pass ESLint\n\n');
  });
});
define('groupExample/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('groupExample/tests/integration/components/groups-overview/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | groups-overview', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/WEpnjCb",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"groups-overview\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Y7FcXxgu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"groups-overview\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('groupExample/tests/test-helper', ['groupExample/app', 'groupExample/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('groupExample/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/groups-overview/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/groups-overview/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define('groupExample/config/environment', [], function() {
  var prefix = 'groupExample';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('groupExample/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=./assets/tests-65e0e7fa848b21675cad54259017f036.map

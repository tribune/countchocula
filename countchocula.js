/* v0.1.0 - infuse plugin for character counts */

// # Count Chocula
//
//          _..._
//        .'     '.
//       ; __   __ ;
//       |/  \ /  \|
//     |\| -- ' -- |/|
//     |(| \o| |o/ |)|
//     _\|     >   |/_
//  .-'  | ,.___., |  '-.
//  \    ;  V'-'V  ;    /
//   `\   \       /   /`
//     `\  '-...-'  /`
//       `\  / \  /`
//         `\\_//`
//
// Meet Count Chocula. He's an infuse plugin who provides a dynamically
// updated character count for text fields throughout P2P. He runs on
// text fields/textareas with a certain data-role.
// 
// To summon the Count:
// Add the following data-roles to your fields.
//  <div class="field" data-role="countchocula">
//    <label for="blah" data-role="countchocula_display">Blah</label>
//    <input type="text" name="blah" data-role="countchocula_count" />
//  </div>
//
// You do not need to add the "[0]" to your label but you can if you want to.
// The Count is flexible.
(function(window, $) {
  var plugins = {
    countchocula: {
      name: 'countchocula',
      // Store the count for each instance, as there can be multiple Counts on
      // each page.
      count: 0,
      // Keep track of the fields here
      countField: null,
      dispField: null,
      handlers: {
        // On keyup recalculate the character count for the field and update the
        // indicator
        keyup: {
          countchocula: function(event, elm) {
            this.fn.updateCount(this, this.countField);
          }
        },
        change: {
          countchocula:function(event, elm) {
            this.fn.updateCount(this, this.countField);
          }
        },
        // When the page loads, add the character count indicators to all
        // countable fields. By doing it this way no additional markup is
        // needed in the view.
        documentready: {
          countchocula: function(event, elm) {
            this.fn.setFields(this, elm);

            // If there is not already a [0] on the field title add one.
            if (this.dispField.innerHTML.match(/\[\d+\]$/) === null) {
              this.dispField.innerHTML += ' [0]';
              // Add the correct count if the field is already populated.
              this.fn.updateCount(this, this.countField);
            }
          }
        }
      },
      fn: {
        // Update the count at the end of the field label
        updateCount: function (pluginInstance, field) {
          pluginInstance.count = parseInt(field.value.length, 10);

          var newCount = pluginInstance.dispField.innerHTML.replace(
            /\[\d+\]$/,
            '['+pluginInstance.count+']'
          );
          pluginInstance.dispField.innerHTML = newCount;
        },
        // Store the fields when this plugin is initialized so we don't have to
        // find the cout/display DOM elements every time the count needs to be
        // updated.
        setFields: function(pluginInstance, rootElm) {
          rootElm = $(rootElm);
          pluginInstance.countField = rootElm.find('[data-role~=countchocula_count]')[0];
          pluginInstance.dispField = rootElm.find('[data-role~=countchocula_display]')[0];
        }
      },
      events: 'documentready:live![data-role~=countchocula]|'
            + 'keyup:live![data-role~=countchocula]|'
            + 'change:live![data-role~=countchocula]'
    }
  };

  infuse.plugins = infuse.plugins ? $.extend(true, infuse.plugins, plugins) : plugins;

})(window, infuse.jQuery);

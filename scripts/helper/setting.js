define(['helper/async_storage'], function(asyncStorage) {
  var setting = {
    values: {
      quality: 'high',
      a4_frequency: 440,
      prevent_lock: true
    },
    get_quality: function() {
      return setting.values.quality;
    },
    set_quality: function(q) {
      setting.values.quality = q;
      setting.save();
    },
    get_a4_frequency: function() {
      return setting.values.a4_frequency;
    },
    set_a4_frequency: function(f) {
      setting.values.a4_frequency = f;
      setting.save();
    },
    save: function() {
      asyncStorage.setItem('setting', setting.values);
    },
    load: function(callback) {
      asyncStorage.getItem('setting', function(values_obj) {
        if (values_obj) {
          setting.values = values_obj;
        } else {
          setting.save();
        }
        callback();
      });
    }
  };
  return setting;
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set("addNewComment", true);
    },
    saveComment() {
      var params = {
        name: this.get("name"),
        date: this.get("date"),
        comment: this.get("comment")
      };
      this.set("addNewComment", false);
      this.sendAction("saveComment", params);
    }
  }
});

describe("Controller: ListCtrl", function(){
   beforeEach(module("notesApp"));

   var ctrl;
   beforeEach(inject(function($controller){
      ctrl = $controller("ListCtrl");
   }));

   it("should have items available on load", function(){
      expect(ctrl.items).toEqual([
         {id: 1, label: "First", done: true},
         {id: 2, label: "Second", done: false}
      ]);
   });

   it("should set finished class on done items", function(){
      var item = {id: 1, label: "First", done: true};
      var itemClass = ctrl.getDoneClass(item);
      expect(itemClass.finished).toBeTruthy();
      expect(itemClass.unfinished).toBeFalsy();

      item.done = false;
      var itemClass = ctrl.getDoneClass(item);
      expect(itemClass.unfinished).toBeTruthy();
      expect(itemClass.finished).toBeFalsy();
   });
});

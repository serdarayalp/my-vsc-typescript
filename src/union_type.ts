function disp(name: string | string[]) {
    if (typeof name == "string") {
      console.log(name);
    } else {
      for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
      }
    }
  }
  
  disp("mark");
  
  disp(["Mark", "Tom", "Mary", "John"]);
  
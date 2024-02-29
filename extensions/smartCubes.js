(function (Scratch) {
  "use strict";
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: "AInow",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is CubeAI available?",
            disableMonitor: true,
          },
          {
            opcode: 'AIbot',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Ask CubeAI [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello!"
              },
            }
          },
            
        ],
      };
    }

    AInow(args) {
      return true
  }
    
    AIbot(args) {
      const response = args.STR
      const q = response.toLowerCase()

      if (!q) {return "You have nothing to say to me!?😮"}
      else if (q.includes("hello", "hai", "hi", "helo", "yo")) {return "Hello! I am CubeAI, ask me something and i'll reply back😀"}
      else if (q.includes("suck", "loser", "mean")) {return "Why are you saying that?😔"}
      else if (q.includes("thx","thank","ty","appreciate")) {return "Your very much welcome😊"}
      else if (q.includes("dog say")) {return "woof bark bark!!🐶"}
      else if (q.includes("cat say")) {return "meow meow😺"}
      else if (q.includes("fuck","shit","bitch","crap")) {return "Please no swearing👮"}
      else if (q.includes("alexa","siri","copilot")) {return "I am aware of those other AIs"}
      else if (q.includes("lol","xd","rofl","lmao","hah")) {return "Loll😆"}
      else if (q.includes("rick astley","rickroll")) {return "Never gonna give you up!!🕺"}
      else if (q.includes("scratch")) {return "Scratch is a visual block based coding created by MIT😸"}
      else if (q.includes("turbowarp")) {return "Turbowarp is a scratch mod that converts to javascript to be speedy🤯"}
      else if (q.includes("penguinmod")) {return "PenguinMod is a mod of turbowarp with many more features.🐧"}
      else if (q.includes("snail ide", "snail-ide")) {return "Snail-IDE is a mod of PenguinMod🐌"}
      else if (q.includes("nerd", "four eye")) {return "I'm technicly a nerd🤓"}
      else if (q.includes("christmas", "halloween", "valentines")) {return "Those are hollidays"}

      else {return "Sorry, I have no response to ''"+response+"''."}
    }

  }
  
  Scratch.extensions.register(new SmartCubes())
})(Scratch);

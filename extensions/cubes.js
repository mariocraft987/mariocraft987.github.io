(function (Scratch) {
  "use strict";
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: 'alertname',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Ask CubeAI [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!"
              },
            }
          },
            
        ],
      };
    }
    alertname(args) {
      alert(args.STR)
    }

  }
  
  Scratch.extensions.register(new SmartCubes())
})(Scratch);

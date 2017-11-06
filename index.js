const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
    return kittens
      }
      function destructivelyPrependKitten(name) {
        kittens.unshift(name)
          return kittens
            }
            function destructivelyRemoveLastKitten(name) {
              kittens.pop(name)
                return kittens
                  }
                  function destructivelyRemoveFirstKitten(name) {
                    kittens.shift(name)
                      return kittens
                        }
                        function appendKitten(name) {
                          var x = [...kittens, name]
                            return x
                              }
                              function prependKitten(name) {
                                var x = [name, ...kittens]
                                  return x
                                    }
                                    function removeLastKitten() {
                                      var b = kitten.slice(-1)
                                        return b
                                          }
                                          function removeFirstKitten() {
                                             var c = kitten.slice(1)
                                              return c
                                                }

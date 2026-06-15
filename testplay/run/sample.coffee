import { readFile } from 'fs'

end = null
sayHello = (content) ->
  if not content?
    console.log "..."
  else if typeof content isnt 'string'
    console.log ":rage:"
  else
    console.log content
  end
end

sayHello null
sayHello "Hi"

obj =                                                                           {
  foo: "bar"                                                                    ,
  hoge: "fuga"                                                                  ,}

nums = [1, 2, 3]
nums.forEach (n) ->
  console.log n
end

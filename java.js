/*ESNEXT:모던자바스크립트
*/
//ES6, let /const
//let:변화하는 내용을 넣을때 쓰는 변수선언법(비고정적이다.)
//var,const:앞에 아이디과클래스값이 바꿔도 처음한네임으로 찍힌다.
//
const multiply2 = (number) => {
  return number * 2
  console.log(multiply2(3))
}
//화살표함수에서 , 매개변수가 하나일때만 가능한 방법이다.
//자바스크립트에서 세부적인 공부를 하고싶으면 자바스크립트.info라는 사이트에 접속//

const multiply3 = number => number * 2
console.log(multiply3(5))

class Pokemon {
  constructor() {
    this.pokemonName = '피카츄'
  }
  showPokemonName () {
    // 포켓몬 이름을 출력해주는 메소드
    console.log(this.pokemonName)
  }
}

class Trainer extends Pokemon{
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName = '지우') {
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName () {
    console.log(this.name)
  }
}

const trainer = new Trainer('웅이')
// trainer.name = '피카츄'
trainer.showTrainerName()
trainer.showPokemonName()

/**
 * 스프레드 연산자
 * 배열에서도 쓸 수있고, 
 * 객체에서도 쓸 수 있다. 
 * ... (점 세개를 꼭 지켜주세요)
 */

const pokemons = ['샤머즈', '스코티쉬폴드', '러시안블루']
const newPoke = [...pokemons, '메인쿤']
// pokemons.forEach(pokemon => newPoke.push(pokemon))
// newPoke.push('파이리')
console.log(newPoke)

const numbers =  [1,2,3]
// 4,5를 추가해서 newNumbers 배열을 새로 생성하세요.
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

const pokemonTrainer = {
  name:'지우',
  pokemon:"피카츄"
}
console.log(pokemonTrainer.name)

const newTrainer = {
  ...pokemonTrainer,
  age: 20
}


/*const filerNumber = (...apple) => {
  return apple.filter(alphabet => {
    if(alphabet === 'a'){
      return alphabet
    }
  })
}
console.log(filerNumber('a','b','c','d','f'))*/
//args는 명을 다른명으로 바꿔도 적용된다.
//['a'],filter 메소드는 결과를 배열로 만들어줌
//(char => char === 'a')
//const po
const filterPokemon = (...args) => {
  return args.filter(Pokemon => Pokemon === '러시안블루')
//조건을 2가지
//&&/||//
}
console.log(filterPokemon(...pokemons))
//('')을 해줘야지 사칙연산이 된다. 안그러면 ''찍히지않은 숫자가 문자로 인식되어서
//연산이 되지않는다.
/*배열구조분해*/

//const pokemons = ['샤머즈', '스코티쉬폴드', '러시안블루']
const [c,d,e] = ['샤머즈','스코티쉬폴드','러시안블루']
console.log(c,d,e)

/*const [f,, ,s] = pokemons
console.log(f,s)*/

//객체 구조분해
//map 배열 메소드
/*const namedPokemon = pokemons.map(pokemons => pokemons + '너로 정했다.')
console.log(namedPokemon)*/
//funtion/() => 펑션과 화살표함수는 요즘 동시에 많이 쓰인다. 공식개념은 
//똑같다.
//똑같은 요소들이 있어도 값이 다르면 적용X




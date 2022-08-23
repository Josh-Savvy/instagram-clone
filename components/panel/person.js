import Button from './button.js'

const Person = ({ person }) => {
  return (
    <div className="flex justify-between items-center">
      <div className='flex gap-3 items-center'>
        <div className="rounded-full overflow-hidden w-8 h-8">
          <img className="w-full" src={person.picture.large} alt={person.name.first} />
        </div>

        <div className="text-xs">
          <h3 className="font-semibold text-sm">{person.login.username}</h3>
          <h4 className="opacity-50">Followed by {person.dob.age * 3} people</h4>
        </div>
      </div>

      <Button>Follow</Button>
    </div>
  )
}

export default Person

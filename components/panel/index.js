import people from '../../data/people'
import Button from './button.js'
import Person from './person'

const Panel = () => {
  return (
    <section className="w-[22rem] hidden lg:block lg:fixed ml-[31.5rem] space-y-4 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-16 h-16 cursor-pointer">
            <img
              className="w-full"
              src="/assets/images/me2.png"
              alt="Joshua Joseph"
            />
          </div>
          <div>
            <h2 className="font-semibold text-md">Joshua Joseph</h2>
            <h3 className="opacity-50">Joshua Joseph</h3>
          </div>
        </div>
        <Button>Switch</Button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-bold opacity-50">Suggestions For You</h1>
        <Button blacked>See All</Button>
      </div>

      <div className='space-y-4'>
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </section>
  )
}

export default Panel

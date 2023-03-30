import { CardInterface } from "../Global/Interfaces"

export function Card(card: CardInterface) {
  return (
    <div className="card w-[17.5rem] h-[10.5rem]">
      <div className="card__inner relative w-full h-full">
        <div className="card--front absolute w-full h-full rounded-2xl bg-orange-500 p-6">
          front
        </div>
        <div className="card--back absolute w-full h-full rounded-2xl bg-red-500 pt-4 pb-[42px] flex flex-col justify-between">
          <div className="bg-gray-900 w-full h-8" />
          <div className="flex gap-2 px-6 items-center text-sm/4">
            <div className="px-3 py-2 w-full bg-gray-300 rounded-[4px] text-right">
              <span className="text-gray-900 opacity-50 tracking-[.38em]">
                {card.cvv}
              </span>
            </div>
            <span className="">CVV</span>
          </div>
        </div>
      </div>
    </div>
  )
}

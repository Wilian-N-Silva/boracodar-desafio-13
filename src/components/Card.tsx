import { CardInterface } from "../Global/Interfaces"
import IconContactlessPayment from "/ContactlessPayment.svg"
import IconVisaFlag from "/flags/visa.svg"

export function Card(card: CardInterface) {
  return (
    <div className="card relative w-[17.5rem] h-[10.5rem]">
      <div className="card__inner relative w-full h-full rounded-2xl border border-gray-700">
        <div className="card--front absolute flex flex-col w-full h-full rounded-2xl  p-6 gap-6">
          <div className="flex items-center justify-between">
            <div className="w-8 aspect-square">
              <img className="w-full" src={IconVisaFlag} alt="" />
            </div>
            <div className="w-6 aspect-square">
              <img className="w-full" src={IconContactlessPayment} alt="" />
            </div>
          </div>
          <div className="">{card.number}</div>
          <div className="flex gap-4 text-sm/4 text-gray-200 opacity-50">
            <span className="w-full uppercase">{card.name}</span>
            <span className="tracking-widest">00/00</span>
          </div>
        </div>
        <div className="card--back absolute w-full h-full rounded-2xl pt-4 pb-[42px] flex flex-col justify-between">
          <div className="bg-gray-900 w-full h-8" />
          <div className="flex gap-2 px-6 items-center text-sm/4">
            <div className="px-3 py-2 w-full bg-gray-300 rounded-[4px] text-right">
              <span className="text-gray-900 opacity-50 tracking-[.38em]">
                {card.cvv}
              </span>
            </div>
            <span className="text-gray-200">CVV</span>
          </div>
        </div>
      </div>
    </div>
  )
}

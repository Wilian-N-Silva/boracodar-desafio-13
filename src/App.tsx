import { useState } from "react"
import { Card } from "./components/Card"
import { Field } from "./components/Field"
import { TrustCheck } from "./components/TrustCheck"
import { CardInterface } from "./Global/Interfaces"

export default function App() {
  const [cardInfo, setCardInfo] = useState<CardInterface>({
    name: "Seu nombre cabron",
    cvv: "123",
    number: "4716 8039 0200 0000",
  })

  const handleCardNumber = (number: string) => {
    setCardInfo((prev) => ({ ...prev, number: number }))
  }
  const handleName = (name: string) => {
    setCardInfo((prev) => ({ ...prev, name: name }))
  }
  const handleCVV = (cvv: string) => {
    setCardInfo((prev) => ({ ...prev, cvv: cvv }))
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center bg-gray-800 pt-16 px-6 h-full w-full md:h-auto md:w-auto md:py-6">
        <Card
          number={cardInfo.number}
          name={cardInfo.name}
          cvv={cardInfo.cvv}
        />

        <div className="flex flex-col gap-6">
          <Field
            label="Número do Cartão"
            type="tel"
            currentValue={cardInfo.number}
            onFieldChanged={handleCardNumber}
          />
          <Field
            label="Nome do titular"
            type="text"
            currentValue={cardInfo.name}
            onFieldChanged={handleName}
          />
          <div className="flex gap-4 ">
            <Field label="Validade" type="tel" />
            <Field
              label="CVV"
              type="tel"
              currentValue={cardInfo.cvv}
              onFieldChanged={handleCVV}
            />
          </div>
        </div>

        <TrustCheck />
        <button className="px-12 py-4 text-lg leading-6 font-semibold text-gray-50 bg-purple-600 hover:bg-purple-500 duration-500 w-full">
          Adicionar Cartão
        </button>
      </div>
    </div>
  )
}

import IconShieldCheck from "/ShieldCheck.svg"

export function TrustCheck() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-5 h-5">
        <img className="w-full" src={IconShieldCheck} alt="" />
      </div>
      <span className="text-sm/4 text-gray-200">Seus dados estão seguros</span>
    </div>
  )
}

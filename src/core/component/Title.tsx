interface TitleProps {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-txt-title3 font-secondary-300 text-green uppercase">{title}</span>
      <h2 className="text-txt-title1 font-secondary-600 text-white-50 ">{subtitle}</h2>
    </div>
  )
}

export default Title
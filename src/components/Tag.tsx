interface TagProps {
  name: string
}

export function Tag({ name }: TagProps) {
  return (
    <div className="flex items-center justify-center rounded-full h-[21px] p-2 bg-brand-yellow-light">
      <span className="text-brand-yellow-dark text-components-tag font-bold">
        {name}
      </span>
    </div>
  )
}

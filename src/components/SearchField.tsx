import { JSX } from 'preact/jsx-runtime'
import { useAtom } from 'jotai'
import bookSearchInfo from 'atoms/userSearchInfo'
import filterOutValues from 'helpers/filterOutValues'

export default function ({
  p: placeholder,
  d: data,
  // fn,
}: {
  p?: string
  d?: string
  // fn: JSX.DOMAttributes<HTMLInputElement>
}) {
  let timing: number = 0
  const [usrInf, setUsrInf] = useAtom(bookSearchInfo)

  return (
    <input
      type="text"
      placeholder={placeholder}
      data={data}
      className="input input-xs w-full max-w-xs"
      onInput={(e) => {
        timing = e.timeStamp
        setTimeout(() => {
          if (timing != e.timeStamp) return ''
          const { value } = e.target as HTMLInputElement

          setUsrInf(filterOutValues({ ...usrInf, [data as string]: value }))
        }, 300)
      }}
    />
  )
}

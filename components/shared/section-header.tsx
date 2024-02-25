import Container from '../ui/container'

type TProps = {
  title: string
  heading: string
}
export default function SectionHeader({ title, heading }: TProps) {
  return (
    <Container className='text-center'>
      <h3 className='font-medium uppercase text-primary'>{title}</h3>
      <div className='flex-center gap-4'>
        <div className='bg-primary size-4 rounded-full' />
        <h1 className='font-bold md:text-5xl'>{heading}</h1>
        <div className='bg-primary size-4 rounded-full' />
      </div>
    </Container>
  )
}

export function handleClickSmoothScrolling(ref: string) {
  const scrollToId = `${ref.toLowerCase().replace(/\s/g, '')}__section`

  document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' })
}

export function handleHeaderSticky() {
  const header = document.querySelector('header') as Element

  const scrollTop: Number = window.scrollY as Number

  // @ts-ignore
  scrollTop >= 80
    ? header.classList.add('is__sticky')
    : header.classList.remove('is__sticky')
}

const navbar = document.getElementById('navbar-wrapper')

window.onscroll = () => {
  if (this.scrollY > 20) {
    navbar.classList.add(
      'bg-base-100',
      'md:text-accent-content',
      'border-base-300'
    )
    navbar.classList.remove('md:text-neutral-content', 'border-transparent')
  } else {
    navbar.classList.remove(
      'bg-base-100',
      'md:text-accent-content',
      'border-transparent',
      'border-base-300'
    )
    navbar.classList.add('md:text-neutral-content', 'border-transparent')
  }
}

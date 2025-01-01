import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from 'lucide-react'
import Link from "next/link"
import NavButton from "@/components/NavButton"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <header className="border-b fixed w-full bg-white dark:bg-gray-800 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">FlowSecurity</span>
          </div>
          <nav className="flex items-center space-x-6">
            <NavButton sectionId="como-funciona">Funcionamento</NavButton>
            <NavButton sectionId="preco">Preço</NavButton>
            <ThemeToggle />
            <Link href="signin">
              <Button variant="ghost">Sign in</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Simplifique Seus Estudos
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground dark:text-gray-400">
              Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
            </p>
            <div className="mx-auto max-w-md space-y-2">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Coloque seu email"
                  className="flex-1"
                />
                <Button type="submit" className="bg-black text-white hover:bg-black/90 dark:bg-gray-700 dark:hover:bg-gray-600">
                  Assine Agora
                </Button>
              </form>
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                Cancele sua assinatura quando quiser. Confira nossos termos.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="como-funciona" className="border-t py-20 scroll-mt-16 dark:border-gray-700">
          <div className="container px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Como funciona?
            </h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[400px]">
                  {/* Placeholder illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 flex-none text-green-500" />
                  <p className="text-xl">Acesso a 1 ebook por mês</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 flex-none text-green-500" />
                  <p className="text-xl">Curadoria especial</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 flex-none text-green-500" />
                  <p className="text-xl">Cancele quando quiser</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="preco" className="border-t py-20 scroll-mt-16 dark:border-gray-700">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Preço Simples e Transparente
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground dark:text-gray-400">
              Escolha o plano que melhor se adapta às suas necessidades
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Plano Básico */}
              <div className="rounded-lg border p-8 dark:border-gray-700">
                <h3 className="mb-2 text-lg font-medium">
                  Plano Básico
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Para iniciantes
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">R$19</span>
                  <span className="text-muted-foreground dark:text-gray-400">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>1 ebook por mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Acesso básico</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Assine Agora
                </Button>
              </div>

              {/* Plano Pro */}
              <div className="rounded-lg border p-8 dark:border-gray-700">
                <h3 className="mb-2 text-lg font-medium">
                  Plano Pro
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Para estudantes dedicados
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">R$29</span>
                  <span className="text-muted-foreground dark:text-gray-400">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>2 ebooks por mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Curadoria especial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Acesso ao fórum</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Assine Agora
                </Button>
              </div>

              {/* Plano Pro Premium VIP */}
              <div className="relative rounded-lg border border-black p-8 shadow-lg dark:border-gray-700 dark:shadow-gray-800">
                <div className="absolute -translate-y-12 rounded-full bg-black px-3 py-1 text-sm text-white dark:bg-gray-700">
                  Popular
                </div>
                <h3 className="mb-2 text-lg font-medium">
                  Plano Pro Premium VIP
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Tudo que você precisa para seus estudos
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">R$49</span>
                  <span className="text-muted-foreground dark:text-gray-400">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>3 ebooks por mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Curadoria especial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Acesso ilimitado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Mentoria mensal</span>
                  </li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-black/90 dark:bg-gray-700 dark:hover:bg-gray-600">
                  Assine Agora
                </Button>
              </div>

              {/* Plano Enterprise */}
              <div className="rounded-lg border p-8 dark:border-gray-700">
                <h3 className="mb-2 text-lg font-medium">
                  Plano Enterprise
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Para times e empresas
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">R$99</span>
                  <span className="text-muted-foreground dark:text-gray-400">/mês</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Acesso ilimitado a ebooks</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Curadoria personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Treinamentos exclusivos</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Entre em Contato
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t py-20 dark:border-gray-700">
          <div className="container px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Pronto Para Mudar Sua Vida?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground dark:text-gray-400">
              Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos.
            </p>
            <Button className="bg-black text-white hover:bg-black/90 dark:bg-gray-700 dark:hover:bg-gray-600">
              Assine Agora
            </Button>
            <p className="mt-4 text-xs text-muted-foreground dark:text-gray-400">
              Cancele sua assinatura quando quiser. Confira nossos termos.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 dark:border-gray-700">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl font-bold">📚 LivroSaaS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground dark:text-gray-400">
            © 2024 LivroSaaS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
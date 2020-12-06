# Recuperação de senha

**Requisitos funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em ambiente de produção;
- O envio de e-mails deve acontecer em segundo plano (background job); ou seja, além de a aplicação estar rodando, nós teremos um outro serviço no servidor (fila).

**Requisitos de negócio**

- O link enviado por e-mail para recuperar senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisitos funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**Requisitos de negócio**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do Prestador

**Requisitos funcionais**

- O usuário deve poder visualizar os agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB (como as notificações são somente em texto,não é necessário estabelecer relacionamentos entre agendamentos e usuários);
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**Requisitos de negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos funcionais**

- O usuário deve poder visualizar todos os prestadores de serviço cadastrados;
- O usuário deve poder visualizar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder visualizar os horários disponíveis de um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Requisitos de negócio**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre as 8h e 17hs;
- O usuário não pode agendar em um horário já reservado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar um serviço consigo mesmo;

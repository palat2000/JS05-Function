function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
const yes = () => alert("I'm agree with you?");
const no = () => alert("whyyyyyyyy");
ask("Do you agree?",yes,no);

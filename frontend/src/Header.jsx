const randomProjectTitles = ['ClassPulse', 'ProcrastinaKill', 'FindIt AI']

function genRandomWords(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header () {
  const description = randomProjectTitles[genRandomWords(2)]
  return (
    <div>
    <h1>{description}</h1>
    <p>ClassPulse is a Context-Based Classroom Presence Verification and Engagement Platform designed to improve attendance authenticity through proximity verification, real-time attendance sessions, and classroom participation analytics. </p>
    </div>
  );
}

export default Header;
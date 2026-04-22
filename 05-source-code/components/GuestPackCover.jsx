// Guest Pack Cover — A4 portrait (magazine cover feel)
// Split composition: deep masthead block + photo block + editorial metadata

function GuestPackCover({ guest }) {
  const deep = '#1A3A5C';
  const alice = '#F2F6FB';
  const gold = '#D4980F';
  const ink = '#0F2237';
  const sky = '#8AABC8';

  return (
    <div style={{
      width: 794, height: 1123, // A4 @ 96dpi
      background: alice,
      position: 'relative',
      fontFamily: 'Inter, sans-serif',
      color: ink,
      overflow: 'hidden',
    }}>
      {/* Top chrome — document label strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 44,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
        borderBottom: `1px solid rgba(138,171,200,0.4)`,
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: ink, opacity: 0.7, fontWeight: 500,
      }}>
        <span>Guest Pack · Confidential</span>
        <span>Mentis Digital · London</span>
        <span>April 2026</span>
      </div>

      {/* MAIN COVER — Deep Space Blue masthead block (top 55%) */}
      <div style={{
        position: 'absolute', top: 44, left: 0, right: 0, height: 580,
        background: deep, color: alice,
        overflow: 'hidden',
      }}>
        {/* Background motif — quiet, behind masthead */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.18,
        }}>
          <SignalMotif width="100%" height={580} lineCount={11}
                       color={alice} accent={gold} showPulse={false}
                       style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Top row: Mentis mark + episode meta */}
        <div style={{
          position: 'absolute', top: 32, left: 40, right: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          zIndex: 2,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyIgdmlld0JveD0iMCAwIDIwNDggMTYxOSIgd2lkdGg9IjY1OSIgaGVpZ2h0PSI1MjEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgoKPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgZmlsbD0iI0YyRjZGQiIgZD0iTSAxNTQ5LjEyIDExLjM1NyBDIDE1NzAuMiA5LjM5OTc5IDE1OTYuOTkgNy45MjI3NCAxNjE4LjA1IDExLjM2NDcgQyAxNjI5Ljk5IDEyLjMzMzYgMTY0Ni42NCAxMy4xMjkxIDE2NTguMDIgMTQuODYzNiBDIDE3NjMuNTggMzAuMzg1MSAxODU5Ljk5IDgzLjUwNDQgMTkyOS41MSAxNjQuNDQ5IEMgMTk4Mi44NSAyMjYuNTI4IDIwMTguNjggMzAxLjY5NyAyMDMzLjMzIDM4Mi4yMiBDIDIwNDEuMjggNDIzLjg3NSAyMDQwLjAzIDQ1MC45MDYgMjAzOS43MSA0OTMuMDMgQyAyMDM5LjQ2IDUxOS4yNTcgMjAzOS4zOSA1NDUuNDg1IDIwMzkuNDkgNTcxLjcxMyBMIDIwMzkuNTYgODkxLjg3MSBMIDIwNDAgMTIxNS41IEMgMjAzOS45NSAxMjQwLjczIDIwMzkuOTUgMTI2Ni4xMSAyMDM5Ljc0IDEyOTEuMzMgQyAyMDM5LjU1IDEzMTUuMzYgMjA0MC45MiAxMzQzLjA2IDIwMzguOTcgMTM2Ni44IEMgMjAzMy4xNiAxNDM3Ljc5IDE5OTguOTMgMTUwMy40MyAxOTQ0LjAzIDE1NDguODEgQyAxODkxLjczIDE1OTIuODIgMTgxOC4yNCAxNjEyLjU5IDE3NTAuODcgMTYwNi4xIEMgMTY4Ni40NCAxNTk5Ljg5IDE2MjQuMDYgMTU2Ni41MSAxNTgyLjYyIDE1MTcgQyAxNTUzLjY5IDE0ODIuMSAxNTMzLjk2IDE0NDAuNSAxNTI1LjIzIDEzOTYuMDIgQyAxNTE3LjUyIDEzNTcuMyAxNTE5LjE3IDEzMjMuODUgMTUxOS41IDEyODQuNTUgQyAxNTE5LjcxIDEyNTQuODQgMTUxOS43OCAxMjI1LjE0IDE1MTkuNjkgMTE5NS40NCBMIDE1MTkuMyA4MjkuODUzIEwgMTUxOS41MyA3NjYuNDk1IEMgMTUxOS42MiA3NDQuMTQ5IDE1MjEuNjkgNzA4LjkyIDE1MTQuOTEgNjg4LjI0MiBDIDE1MDAuMjUgNjQzLjIzOCAxNDYwLjMxIDYxMS4xOTkgMTQxMy4xOSA2MDYuNjQgQyAxMzMwLjE3IDU5OC44MDggMTI4Ny40MSA2NTkuOTk5IDEyNTkuMTIgNzI3LjUzMiBMIDEyNTUuMTkgNzM3LjA1MyBDIDEyNTMuNiA3NDcuMTQxIDEyNjUuMzkgNzczLjQxOSAxMjY5LjM1IDc4My45MjkgQyAxMjc2Ljc4IDgwMy41OTkgMTI4My43NSA4MjMuNDM3IDEyOTAuMjcgODQzLjQyNiBDIDEzMTIuMzQgOTEyLjYwMyAxMzQwLjEgMTAxMS40NCAxMzMxLjMyIDEwODMuMTQgQyAxMzIxLjcgMTE2NC40NSAxMjgwLjA5IDEyMzguNTggMTIxNS43IDEyODkuMTUgQyAxMTUwLjU5IDEzMzkgMTA2OC4yNiAxMzYwLjc3IDk4Ny4wMjQgMTM0OS42MiBDIDkwOC45MjIgMTMzOS42MiA4MzcuODY1IDEyOTkuMzYgNzg5LjEzOSAxMjM3LjUxIEMgNjkzLjc4NCAxMTE0LjQgNzE4LjUzMiA5NzguMTU3IDc2My43NSA4MzkuNTk3IEMgNzY3LjQwOSA4MjguMzg0IDc3My4yNjIgODExLjk5NyA3NzYuOTA5IDgwMS41MTQgQyA3ODEuMjI5IDc4OS4wOTUgNzk4LjgzNyA3NTAuOTY1IDc5OS40MzEgNzQwLjUxOCBDIDc5OC4xMjEgNzEyLjMwNiA3NzMuNTM4IDY3NS40MDIgNzU2LjIgNjU0Ljg0NyBDIDcyMS4xNTcgNjEzLjMwMiA2NjcuMDc4IDU5NC4yMDMgNjE0Ljk0NiA2MTEuNjc2IEMgNTc3LjI0NSA2MjQuMzEzIDU0My41MTQgNjYxLjUzOCA1MzYuNDc4IDcwMS4wMTggQyA1MzIuNjE0IDcyMi43MDIgNTM0LjI1MSA3NDkuNjcyIDUzNC40MzMgNzcyLjIyMiBDIDUzNC42NyA4MDEuMjk5IDUzNC43MDYgODMwLjM3NiA1MzQuNTQyIDg1OS40NTQgTCA1MzQuNDE2IDEyMTQuNDggTCA1MzQuMDUzIDEzMDUuODcgQyA1MzQuMDI5IDEzMjguNTcgNTM0LjUxIDEzNTIuNDkgNTMyLjc4MSAxMzc1LjA1IEMgNTI3LjczNyAxNDQwLjg1IDQ5My40OTIgMTUwNC4yIDQ0My41MjUgMTU0Ni45MyBDIDM4OC4zNTEgMTU5NC4xMiAzMjAuNDI5IDE2MTEuNTggMjQ4Ljg5MSAxNjA1Ljg1IEMgMTgxLjg5IDE2MDAuNzcgMTE5LjY2NCAxNTY5LjIzIDc1Ljk0MzUgMTUxOC4yMSBDIDQ3LjE2OTcgMTQ4NC4zIDI1LjcwODUgMTQzOC44OCAxOC40ODI2IDEzOTQuOTQgQyAxMy4wNyAxMzYyLjA0IDEzLjc1MTUgMTMzMi45OCAxMy45MTk0IDEzMDAuMDIgTCAxNC4wNzk0IDEyMjQuMDUgTCAxNC4wODA3IDkzNi45OTcgTCAxMy43Mjk0IDU5MS40MDggQyAxMy44MjkgNTYxLjYyIDEzLjc3NDMgNTMxLjgzMiAxMy41NjU0IDUwMi4wNDUgQyAxMy40MyA0NzguNjQ0IDEyLjg4NTkgNDUxLjI0IDE0LjgxOTUgNDI4LjA4NSBDIDIzLjY5MzEgMzA4LjIwOCA4MC40MTUxIDE5Ni45NCAxNzIuMjEzIDExOS4zMzYgQyAyNzEuOTIgMzUuMjQ3MiAzOTYuMTkyIDEuMTU1MDggNTI0Ljg1NSAxNC44ODcyIEMgNzI0Ljc4NiAzNi4yMjU2IDg5OC41MjggMTkxLjIxNiAxMDIyLjYgMzM4Ljg2IEMgMTAyNC4zIDM0MS4wNyAxMDI1LjYgMzQyLjk4MiAxMDI3LjY5IDM0NC44NDMgQyAxMDI5Ljc3IDM0Ny40MjQgMTAzMC42NCAzNDguNTggMTAzMy4wOSAzNTAuNzU3IEMgMTAzOC40OSAzMzguMjE2IDEwNDguNzUgMzI2LjM4NSAxMDU3LjY0IDMxNi4wNzcgQyAxMTg2LjEzIDE2Ni45ODIgMTM0NC4zNSAyNi44NDYxIDE1NDkuMTIgMTEuMzU3IHogTSAxMTc4LjA1IDU3NC4yNTQgQyAxMTgxLjYgNTgxLjI4MiAxMTgzLjgyIDU4NS4zNDMgMTE4OC4xOCA1OTEuODY2IEMgMTE5Ny4wNiA1NzIuMjQ1IDEyMTUuODMgNTU1LjQ4NCAxMjMxLjUxIDU0MS44MTkgQyAxMjY4LjI1IDUwOS44MTUgMTMxMi41MSA0ODUuNzY4IDEzNjEuMDUgNDc4LjU2IEMgMTM3OC44MSA0NzUuOTIzIDEzOTMuOTQgNDcyLjc3MSAxNDEyLjcxIDQ3NS4wNDEgQyAxNDk0LjYxIDQ4NC45NDIgMTU1NS44NCA1MTUuMjUzIDE2MDIuNDQgNTgyLjc3NiBDIDE2MjQuMTUgNjE0LjI5NSAxNjM4LjUxIDY1MC4yOCAxNjQ0LjQ4IDY4OC4wODMgQyAxNjQ3LjQ3IDcwNy45NTEgMTY0Ni4yNiA3NDAuNTc3IDE2NDYuMyA3NjEuNjY2IEwgMTY0Ni40NCA4OTguMjUzIEwgMTY0Ni4xNSAxMjQ0LjE5IEwgMTY0Ni42NCAxMzExLjQzIEMgMTY0Ny4xIDEzNTkuODEgMTY0Ni4yIDEzOTQgMTY4MC4xOSAxNDMzLjg2IEMgMTcyOC4wNiAxNDg5Ljk3IDE4MTMuODcgMTQ5Mi42MSAxODY4Ljk4IDE0NDUuNTEgQyAxOTE4Ljc4IDE0MDIuOTUgMTkxMi44OSAxMzUwLjk0IDE5MTIuNiAxMjkyLjUzIEwgMTkxMi41MSAxMTg5LjMzIEwgMTkxMi4yOCA3ODEuNjg5IEwgMTkxMi4xNSA1NTEuMTE5IEwgMTkxMi4yMiA0ODMuOTExIEMgMTkxMi4yNCA0NTguMjE4IDE5MTIuODUgNDQxLjMyMiAxOTA4LjkxIDQxNi4wOTQgQyAxODk5LjIzIDM1NC4xMTIgMTg3My43OSAyOTMuNTc5IDE4MzIuMiAyNDYuMzUxIEMgMTc5MC41IDE5OC45OTYgMTczNi42NSAxNjYuMDk4IDE2NzUuNjkgMTUwLjMzNiBDIDE2NTYuNjkgMTQ1LjQyMiAxNjQzLjQ1IDE0MS4xODkgMTYyMy4yOSAxNDAuMDAyIEMgMTUxNi40NCAxMjQuNDE0IDE0MTMuMDggMTY4LjQ4NiAxMzI4LjkxIDIzMS4zMDYgQyAxMjYzLjcgMjc5LjM1OCAxMjA1LjAyIDMzNS42OTcgMTE1NC4zNiAzOTguOTAzIEMgMTEzOC4zNiA0MTkuMDk4IDExMjUuNjcgNDQwLjU4NyAxMTExLjI1IDQ1OC45MTYgQyAxMTEzLjUyIDQ2NS40NzIgMTEyMS44NiA0NzcuOTk1IDExMjUuOTIgNDg0LjYxOSBDIDExMzQuNiA0OTguNjMgMTE0My4xNSA1MTIuNzE5IDExNTEuNTcgNTI2Ljg4NiBDIDExNTkuOTggNTQxLjI0MyAxMTY5Ljc3IDU2MS42MjMgMTE3OC4wNSA1NzQuMjU0IHogTSA3MTQuNzU0IDQ4Ny4xNSBDIDc4Mi4yNTcgNTA2LjA4MiA4MjQuNDUgNTM5LjU1MiA4NjguNzE1IDU5My40OCBDIDg4OC40NTkgNjE3LjU0NCA5MDYuMTYyIDY0My4yMTIgOTIxLjY0MiA2NzAuMjE2IEMgOTY2LjE4NiA3NDguNzY1IDk0MC4xMDkgNzIzLjgxIDkxMi4yNiA3OTguNDU1IEMgODc2LjQzNiA4OTQuNDc0IDgyMC4zNDMgMTAzNy41MiA4NzMuMDAzIDExMzQuNTkgQyA4OTUuMjIyIDExNzYuNDUgOTMzLjU1NSAxMjA3LjQ0IDk3OS4xNDUgMTIyMC40IEMgMTAyMy45OCAxMjMzLjQzIDEwNzQuODQgMTIyNS41IDExMTUuNDYgMTIwMi45OCBDIDExNTUuMjEgMTE4MC43MSAxMTg0LjQyIDExNDMuNSAxMTk2LjYzIDEwOTkuNjEgQyAxMjAyLjEgMTA4MC40MSAxMjA0LjU3IDEwNjAuNDcgMTIwMy45NCAxMDQwLjUyIEMgMTIwMi42OCAxMDA3LjIxIDExOTIuODkgOTY2LjM3OSAxMTg0LjMzIDkzNC4yNTMgQyAxMTU0LjQzIDgyMi43OTIgMTExMC44OCA3MTUuNDUyIDEwNTQuNjUgNjE0LjY3NSBDIDEwMjYuMjYgNTY0LjM0OCA5OTYuNDMgNTE2LjI5NyA5NjEuOTYzIDQ2OS43MDggQyA4ODkuOTYyIDM3Mi4zODMgNzc2LjEwNSAyNTUuMTUxIDY3MC43ODcgMTk0Ljc4NyBDIDYzNy40MTQgMTc1LjM2NCA2MDEuNjI5IDE2MC40MTggNTY0LjM1NSAxNTAuMzM1IEMgNTI3LjM3OSAxNDAuMDQxIDQ5Ny43OTYgMTM3Ljg0MyA0NTkuNjI3IDEzOC40NTUgQyA0NDYuMTY2IDEzOC44NzIgNDMxLjIxMSAxMzkuMDQ5IDQxNy45NDMgMTQxLjIwNSBDIDM0Ny4xMzcgMTUyLjcxIDI3OC42NTIgMTg2LjA2NCAyMjkuMzYyIDIzOC4zMzMgQyAxODYuMDIyIDI4My40NDkgMTU2LjU5NyAzNDAuMDk3IDE0NC42MDcgNDAxLjQ5OCBDIDEzNi4xMTYgNDQ0LjIwNSAxMzguODY5IDUwNi40NzUgMTM4Ljk0NyA1NTEuNzA5IEwgMTM5LjA1MiA3NDguODQ2IEwgMTQwLjAwNyAxMTQ5LjY3IEwgMTQwLjYxNyAxMjYyLjM1IEMgMTQwLjU1MiAxMjkxLjUyIDE0MC4wOSAxMzIxIDE0MC41OSAxMzUwIEMgMTQxLjMwOCAxMzkxLjY5IDE1Ny41OTQgMTQyNy4wNCAxOTAuMTk3IDE0NTIuNjcgQyAyNzEuNjc5IDE1MTYuNzIgMzk3LjE1NiAxNDY4Ljc3IDQwOC4yNzMgMTM2My44MiBDIDQxMC4xMzkgMTM0Ni4yIDQwOS40NTMgMTMyOC41OSA0MDkuMzM2IDEzMTEuMDQgTCA0MDguODc0IDEyNDIuNjIgTCA0MDkuNjc2IDkxOS45NiBMIDQwOS41NDUgNzg1LjI0MSBDIDQwOS4zOSA3NTQuNzczIDQwNy43NjIgNzE4LjAyOSA0MTEuMzkyIDY4OC4xNzMgQyA0MTguOTQ5IDYyNi4wMTcgNDU1Ljk3NiA1NjUuMiA1MDYuMDk4IDUyOC4wMDggQyA1NDQuNDMxIDQ5OS41NDYgNTkwLjMxMyA0ODMuMDM0IDYzNy45OTMgNDgwLjU0MiBDIDY2My4xMzggNDc5LjIyOCA2OTAuMzE0IDQ4MC44NTYgNzE0Ljc1NCA0ODcuMTUgeiI+PC9wYXRoPgo8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIiBmaWxsPSIjRjJGNkZCIiBkPSJNIDE1NDkuMTIgMTEuMzU3IEMgMTU3MC4yIDkuMzk5NzkgMTU5Ni45OSA3LjkyMjc0IDE2MTguMDUgMTEuMzY0NyBDIDE2MjkuOTkgMTIuMzMzNiAxNjQ2LjY0IDEzLjEyOTEgMTY1OC4wMiAxNC44NjM2IEMgMTc2My41OCAzMC4zODUxIDE4NTkuOTkgODMuNTA0NCAxOTI5LjUxIDE2NC40NDkgQyAxOTgyLjg1IDIyNi41MjggMjAxOC42OCAzMDEuNjk3IDIwMzMuMzMgMzgyLjIyIEMgMjA0MS4yOCA0MjMuODc1IDIwNDAuMDMgNDUwLjkwNiAyMDM5LjcxIDQ5My4wMyBDIDIwMzkuNDYgNTE5LjI1NyAyMDM5LjM5IDU0NS40ODUgMjAzOS40OSA1NzEuNzEzIEwgMjAzOS41NiA4OTEuODcxIEwgMjA0MCAxMjE1LjUgQyAyMDM5Ljk1IDEyNDAuNzMgMjAzOS45NSAxMjY2LjExIDIwMzkuNzQgMTI5MS4zMyBDIDIwMzkuNTUgMTMxNS4zNiAyMDQwLjkyIDEzNDMuMDYgMjAzOC45NyAxMzY2LjggQyAyMDMzLjE2IDE0MzcuNzkgMTk5OC45MyAxNTAzLjQzIDE5NDQuMDMgMTU0OC44MSBDIDE4OTEuNzMgMTU5Mi44MiAxODE4LjI0IDE2MTIuNTkgMTc1MC44NyAxNjA2LjEgQyAxNjg2LjQ0IDE1OTkuODkgMTYyNC4wNiAxNTY2LjUxIDE1ODIuNjIgMTUxNyBDIDE1NTMuNjkgMTQ4Mi4xIDE1MzMuOTYgMTQ0MC41IDE1MjUuMjMgMTM5Ni4wMiBDIDE1MTcuNTIgMTM1Ny4zIDE1MTkuMTcgMTMyMy44NSAxNTE5LjUgMTI4NC41NSBDIDE1MTkuNzEgMTI1NC44NCAxNTE5Ljc4IDEyMjUuMTQgMTUxOS42OSAxMTk1LjQ0IEwgMTUxOS4zIDgyOS44NTMgTCAxNTE5LjUzIDc2Ni40OTUgQyAxNTE5LjYyIDc0NC4xNDkgMTUyMS42OSA3MDguOTIgMTUxNC45MSA2ODguMjQyIEMgMTUwMC4yNSA2NDMuMjM4IDE0NjAuMzEgNjExLjE5OSAxNDEzLjE5IDYwNi42NCBDIDEzMzAuMTcgNTk4LjgwOCAxMjg3LjQxIDY1OS45OTkgMTI1OS4xMiA3MjcuNTMyIEwgMTI1NS4xOSA3MzcuMDUzIEMgMTI1My42IDczNi41MjcgMTI1MS45MyA3MzUuNTI4IDEyNTEuMjUgNzMzLjkzNiBDIDEyMzEuMzUgNjg3LjA3NSAxMjA2LjkgNjM5LjkzNiAxMTg3LjUxIDU5My4wNjMgTCAxMTg4LjE4IDU5MS44NjYgQyAxMTk3LjA2IDU3Mi4yNDUgMTIxNS44MyA1NTUuNDg0IDEyMzEuNTEgNTQxLjgxOSBDIDEyNjguMjUgNTA5LjgxNSAxMzEyLjUxIDQ4NS43NjggMTM2MS4wNSA0NzguNTYgQyAxMzc4LjgxIDQ3NS45MjMgMTM5My45NCA0NzIuNzcxIDE0MTIuNzEgNDc1LjA0MSBDIDE0OTQuNjEgNDg0Ljk0MiAxNTU1Ljg0IDUxNS4yNTMgMTYwMi40NCA1ODIuNzc2IEMgMTYyNC4xNSA2MTQuMjk1IDE2MzguNTEgNjUwLjI4IDE2NDQuNDggNjg4LjA4MyBDIDE2NDcuNDcgNzA3Ljk1MSAxNjQ2LjI2IDc0MC41NzcgMTY0Ni4zIDc2MS42NjYgTCAxNjQ2LjQ0IDg5OC4yNTMgTCAxNjQ2LjE1IDEyNDQuMTkgTCAxNjQ2LjY0IDEzMTEuNDMgQyAxNjQ3LjEgMTM1OS44MSAxNjQ2LjIgMTM5NCAxNjgwLjE5IDE0MzMuODYgQyAxNzI4LjA2IDE0ODkuOTcgMTgxMy44NyAxNDkyLjYxIDE4NjguOTggMTQ0NS41MSBDIDE5MTguNzggMTQwMi45NSAxOTEyLjg5IDEzNTAuOTQgMTkxMi42IDEyOTIuNTMgTCAxOTEyLjUxIDExODkuMzMgTCAxOTEyLjI4IDc4MS42ODkgTCAxOTEyLjE1IDU1MS4xMTkgTCAxOTEyLjIyIDQ4My45MTEgQyAxOTEyLjI0IDQ1OC4yMTggMTkxMi44NSA0NDEuMzIyIDE5MDguOTEgNDE2LjA5NCBDIDE4OTkuMjMgMzU0LjExMiAxODczLjc5IDI5My41NzkgMTgzMi4yIDI0Ni4zNTEgQyAxNzkwLjUgMTk4Ljk5NiAxNzM2LjY1IDE2Ni4wOTggMTY3NS42OSAxNTAuMzM2IEMgMTY1Ni42OSAxNDUuNDIyIDE2NDMuNDUgMTQxLjE4OSAxNjIzLjI5IDE0MC4wMDIgQyAxNTE2LjQ0IDEyNC40MTQgMTQxMy4wOCAxNjguNDg2IDEzMjguOTEgMjMxLjMwNiBDIDEyNjMuNyAyNzkuMzU4IDEyMDUuMDIgMzM1LjY5NyAxMTU0LjM2IDM5OC45MDMgQyAxMTM4LjM2IDQxOS4wOTggMTEyNS42NyA0NDAuNTg3IDExMTEuMjUgNDU4LjkxNiBDIDExMDUuMTggNDU0Ljc0NSAxMDQwLjc0IDM2NC41MjQgMTAzMi42OSAzNTIuMDY0IEwgMTAzMy4wOSAzNTAuNzU3IEMgMTAzOC40OSAzMzguMjE2IDEwNDguNzUgMzI2LjM4NSAxMDU3LjY0IDMxNi4wNzcgQyAxMTg2LjEzIDE2Ni45ODIgMTM0NC4zNSAyNi44NDYxIDE1NDkuMTIgMTEuMzU3IHoiPjwvcGF0aD4KPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgZmlsbD0iI0YyRjZGQiIgZD0iTSAxNTQ5LjEyIDExLjM1NyBDIDE1NzAuMiA5LjM5OTc5IDE1OTYuOTkgNy45MjI3NCAxNjE4LjA1IDExLjM2NDcgQyAxNjE3LjMxIDEyLjMwMDcgMTYxNS44NiAxMy43MDQ2IDE2MTQuNDkgMTMuNzU4MyBDIDE1OTQuNTMgMTQuNTQwNSAxNTczLjM1IDE1LjAxNDMgMTU1My40OCAxMy40MDI5IEMgMTU1MS44MiAxMy4yNjg0IDE1NTAuMTMgMTIuMDU4NSAxNTQ5LjEyIDExLjM1NyB6Ij48L3BhdGg+Cjwvc3ZnPg==" alt="Mentis" style={{ height: 22, display: 'block' }} />
            <span style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: alice, opacity: 0.55, fontWeight: 500,
            }}>Mentis Digital</span>
          </div>
          <IssueNumber number={guest.episode} color={alice} accent={gold} />
        </div>

        {/* Masthead — centre-left */}
        <div style={{
          position: 'absolute', left: 40, top: 120, zIndex: 2,
        }}>
          <SignalWordmark size={1.35} color={alice} accent={gold} />
        </div>

        {/* Tagline — bottom of deep block */}
        <div style={{
          position: 'absolute', left: 40, right: 40, bottom: 36, zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 24,
        }}>
          <div style={{ maxWidth: 380 }}>
            <div style={{
              fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
              fontSize: 20, lineHeight: 1.35, color: alice,
              letterSpacing: '-0.01em',
            }}>
              Long-form conversations with the founders and MDs rebuilding how recruitment agencies grow.
            </div>
          </div>
          <div style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: alice, opacity: 0.6, fontWeight: 500, textAlign: 'right',
            whiteSpace: 'nowrap',
          }}>
            Hosted by<br/>
            <span style={{
              fontFamily: 'Fraunces, serif', fontStyle: 'italic', textTransform: 'none',
              fontSize: 14, letterSpacing: '-0.01em', opacity: 0.9, fontWeight: 400,
            }}>Trisden Mills &amp; Malik Makinde</span>
          </div>
        </div>

        {/* Gold hairline, bottom edge */}
        <div style={{
          position: 'absolute', left: 40, right: 40, bottom: 0, height: 2,
          background: gold, opacity: 0.95,
        }} />
      </div>

      {/* LOWER BLOCK — guest photo + name */}
      <div style={{
        position: 'absolute', top: 624, left: 0, right: 0, bottom: 60,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
      }}>
        {/* Left: photo */}
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRight: `1px solid rgba(138,171,200,0.3)`,
        }}>
          <img src={guest.photo} alt={guest.name}
               style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.02) saturate(0.85)' }} />
          {/* Gold frame corner */}
          <div style={{
            position: 'absolute', top: 20, left: 20, width: 28, height: 28,
            borderTop: `1.5px solid ${gold}`, borderLeft: `1.5px solid ${gold}`,
          }} />
          <div style={{
            position: 'absolute', bottom: 20, right: 20, width: 28, height: 28,
            borderBottom: `1.5px solid ${gold}`, borderRight: `1.5px solid ${gold}`,
          }} />
          {/* photo credit placeholder */}
          <div style={{
            position: 'absolute', top: 16, right: 16,
            fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: alice, opacity: 0.8, fontWeight: 500,
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          }}>[ GUEST HEADSHOT · SWAP ]</div>
        </div>

        {/* Right: guest metadata */}
        <div style={{
          padding: '40px 40px 32px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          background: alice,
        }}>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: deep, fontWeight: 500, marginBottom: 16,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span>This Episode</span>
              <span style={{ width: 24, height: 1, background: sky, opacity: 0.6 }} />
            </div>

            <div style={{
              fontFamily: 'Fraunces, serif', fontWeight: 600,
              fontSize: 42, lineHeight: 1.02, letterSpacing: '-0.025em',
              color: ink, marginBottom: 10,
            }}>
              {guest.name}
            </div>
            <div style={{
              fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
              fontSize: 18, lineHeight: 1.3, color: ink, opacity: 0.75,
              marginBottom: 28,
            }}>
              {guest.role}<br/>
              <span style={{ color: deep, fontStyle: 'normal', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.01em' }}>{guest.agency}</span>
            </div>

            {/* Metadata block */}
            <div style={{
              borderTop: `1px solid rgba(138,171,200,0.4)`,
              paddingTop: 20, display: 'grid', gap: 14,
            }}>
              {[
                ['Recording', guest.recordingDate],
                ['Format', '75 min · edited to 45'],
                ['Location', guest.location],
                ['Release window', guest.releaseWindow],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{
                    fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: deep, opacity: 0.65, fontWeight: 500,
                  }}>{k}</span>
                  <span style={{
                    fontSize: 13, color: ink, fontWeight: 400, textAlign: 'right',
                    fontFamily: 'Inter, sans-serif',
                  }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — "what's inside" */}
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: deep, fontWeight: 500, marginBottom: 8,
            }}>Inside this pack</div>
            <div style={{
              fontSize: 12, lineHeight: 1.55, color: ink, opacity: 0.8,
            }}>
              Why we asked you · The conversation shape · Three themes ·
              What to prepare · Logistics · The Laws of The Signal
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        background: deep, color: alice,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
      }}>
        <SignalWordmarkInline color={alice} accent={gold} size={0.95} />
        <div style={{
          fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
          fontSize: 14, color: alice, opacity: 0.85, letterSpacing: '-0.01em',
        }}>
          Nothing is by accident.
        </div>
        <div style={{
          fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: alice, opacity: 0.5, fontWeight: 500,
        }}>001 · Cover</div>
      </div>
    </div>
  );
}

Object.assign(window, { GuestPackCover });

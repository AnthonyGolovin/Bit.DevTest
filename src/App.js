import React from 'react';
import PrimaryButton, { LoadingTextButton, SuccessButton, DangerButton, RoundSpinnerButton } from '@bit/lekanmedia.shared-ui.primary-button';

const style = {
	margin: '20px',
	display: 'flex',
	justifyContent: 'center',
  alignItem: 'center',
  width: '200px'
};

function App() {
  return (
    <section>
		<div style={style}>
			<PrimaryButton text="Primary Button" />
		</div>
		<div style={style}>
			<LoadingTextButton spinnerSize={12} />
		</div>
		<div style={style}>
			<RoundSpinnerButton spinnerColors={['#3b73ff', '#5cb85c', '#d9534f', '#910ac7']} spinnerSize={25} />
		</div>
		<div style={style}>
			<SuccessButton />
		</div>
		<div style={style}>
			<DangerButton />
		</div>
	</section>
  );
}

export default App;

import { auth, signOut } from 'app/auth';

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {session?.user?.email}
        <div>
      <h2>Student Documents</h2>
      <form action="upload.php" method="post" encType="multipart/form-data">
        <label htmlFor="student_id">Verified copy of student ID/ passport:</label><br />
        <input type="file" id="student_id" name="student_id" /><br />

        <label htmlFor="matric_certificate">Verified copy of matric certificate / NQF4:</label><br />
        <input type="file" id="matric_certificate" name="matric_certificate" /><br />

        <label htmlFor="saqa_equivalent">Foreign students: SAQA equivalent certification:</label><br />
        <input type="file" id="saqa_equivalent" name="saqa_equivalent" /><br />

        <label htmlFor="highest_qualification">Proof of highest qualification (if applicable):</label><br />
        <input type="file" id="highest_qualification" name="highest_qualification" /><br />

        <label htmlFor="study_permit">Foreign students: verified study/ work permit for programme duration (if applicable):</label><br />
        <input type="file" id="study_permit" name="study_permit" /><br />

        <label htmlFor="disability_documentation">Disability supporting documentation (if applicable):</label><br />
        <input type="file" id="disability_documentation" name="disability_documentation" /><br />

        <label htmlFor="dhet_declaration">Signed DHET declaration form for all Higher Certificate Programmes (if applicable):</label><br />
        <input type="file" id="dhet_declaration" name="dhet_declaration" /><br />

        <h2>Account Payer Documents</h2>

        <label htmlFor="payer_id">Copy of account payer ID:</label><br />
        <input type="file" id="payer_id" name="payer_id" /><br />

        <label htmlFor="salary_slip">Copy of account payer’s most recent salary slip/3 months bank statements:</label><br />
        <input type="file" id="salary_slip" name="salary_slip" /><br />

        <label htmlFor="payer_address_proof">Proof of account payer’s address:</label><br />
        <input type="file" id="payer_address_proof" name="payer_address_proof" /><br />

        <label htmlFor="legal_entity_documentation">Legal entity registration documentation (CIPC Certificate) (if applicable):</label><br />
        <input type="file" id="legal_entity_documentation" name="legal_entity_documentation" /><br />

        <label htmlFor="debit_order_authority">Signed debit order authority form:</label><br />
        <input type="file" id="debit_order_authority" name="debit_order_authority" /><br />

        <label htmlFor="purchase_order">Purchase order (if applicable):</label><br />
        <input type="file" id="purchase_order" name="purchase_order" /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}

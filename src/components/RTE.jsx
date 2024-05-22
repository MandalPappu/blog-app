import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  const tinyKey = import.meta.env.VITE_APPWRITE_TINY_API_KEY

  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
          <Editor
             apiKey={tinyKey}
             initialValue={defaultValue}
             init={{
                initialValue: defaultValue,
                height:500,
                menubar:'file edit view insert format tools table help',
                selector: "textarea#open-source-plugins",
                plugins:`preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion`,
                toolbar:
                "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                templates: [
                  { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                  { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                  { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
                ],
             }}
             onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}


import React, { FC } from 'react';

type PageNotesProps = {
  notes: Array<string>;
}

export const PageNotes:FC<PageNotesProps> = ({ notes: allNotes }) => {
  if (!allNotes?.length) {
    return (
      <div className="pageNotes pageNotes__empty">
        No notes on this page. Click on 'Add' button to add a new note.
      </div>
    );
  }

  return (
    <div className="pageNotes">
      {
        allNotes.map((note) => {
          return <div>{ note }</div>
        })
      }
    </div>
  );
};
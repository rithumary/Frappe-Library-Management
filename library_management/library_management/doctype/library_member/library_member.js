// Copyright (c) 2026, Rithu Mary Varghese and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {
    refresh: function(frm) {

        // Create Membership button
        frm.add_custom_button('Create Membership', () => {
            frappe.new_doc('Library Membership', {
                library_member: frm.doc.name
            });
        });

        // Create Transaction button
        frm.add_custom_button('Create Transaction', () => {
            let member_id = frm.doc.name;

            frappe.new_doc('Library Transaction').then(() => {
                cur_frm.set_value('library_member', member_id);
            });
        });

    }
});

const Contato = require("../models/contatoModel");

exports.list = async (req, res) => {
    const contatos = await Contato.buscaContatos(req.session.user._id);
    res.render("contatos", { contatos });
};

exports.index = (req, res) => {
    res.render("contato", {
        contato: {},
    });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register(req.session.user._id);

        if (contato.errors.length > 0) {
            req.flash("errors", contato.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }

        req.flash("success", "Contato registrado com sucesso.");
        req.session.save(() =>
            res.redirect(`/contato/index/${contato.contato._id}`)
        );
    } catch (e) {
        console.log(e);
        return res.render("404");
    }
};

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render("404");

    const contato = await Contato.buscaPorId(req.params.id, req.session.user._id);
    if (!contato) return res.render("404");

    res.render("contato", { contato });
};

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render("404");

        const contato = await Contato.buscaPorId(req.params.id, req.session.user._id);
        if (!contato) return res.render("404");

        const contatoEdit = new Contato(req.body);
        await contatoEdit.edit(req.params.id);

        if (contatoEdit.errors.length > 0) {
            req.flash("errors", contatoEdit.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }

        req.flash("success", "Contato editado com sucesso.");
        req.session.save(() =>
            res.redirect(`/contato/index/${contatoEdit.contato._id}`)
        );
    } catch (e) {
        console.log(e);
        res.render("404");
    }
};

exports.delete = async function (req, res) {
    if (!req.params.id) return res.render("404");

    const contato = await Contato.delete(req.params.id, req.session.user._id);
    if (!contato) return res.render("404");

    req.flash("success", "Contato apagado com sucesso.");
    req.session.save(() => res.redirect("back"));
};

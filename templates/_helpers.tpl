{{/*
_helpers.tpl
Reusable named templates (partials).
Files starting with _ are never rendered as K8s resources —
Helm skips them. They only exist to be called from other templates
using the include function.
*/}}

{{/*
Returns the app label used consistently across all resources.
Centralizing here means one change propagates everywhere.
*/}}
{{- define "k8s-app.labels" -}}
app: {{ .Release.Name }}
{{- end }}